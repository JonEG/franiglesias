import { describe, it, expect, beforeAll } from 'vitest';
import { GetCurrentStock } from '../../src/inventory/driving/forManagingProducts/getCurrentStock/GetCurrentStock';
import { GetCurrentStockHandler } from '../../src/inventory/driving/forManagingProducts/getCurrentStock/GetCurrentStockHandler';
import { IdentityProvider, Inventory } from '../../src/inventory/Inventory';
import { InMemoryProductStorage } from '../../src/driven/forStoringProducts/InMemoryProductStorage';
import { AddProduct } from '../../src/inventory/driving/forManagingProducts/addProduct/AddProduct';
import { AddProductHandler } from '../../src/inventory/driving/forManagingProducts/addProduct/AddProductHandler';
import { InvalidProductName, type AddProductResponse } from '../../src/inventory/driving/forManagingProducts/addProduct/AddProductResponse';

export class InventoryConfigurator {
    private constructor(private readonly storage: InMemoryProductStorage, private readonly inventory: Inventory) { }

    static forTest(): InventoryConfigurator {
        const examples = new Map<string, Object>([
            ['existing-product-id', {
                id: 'existing-product-id',
                name: 'existing-product-name',
                quantity: 10
            }],
            ['out-of-stock-product-id', {
                id: 'out-of-stock-product-id',
                name: 'out-of-stock-product-name',
                quantity: 0
            }]
        ])

        const inMemoryProductStorage = new InMemoryProductStorage(examples);
        const inventory = new Inventory(inMemoryProductStorage, new IdentityProvider());

        return new InventoryConfigurator(inMemoryProductStorage, inventory);
    }

    buildGetCurrentStockHandler(): GetCurrentStockHandler {
        return new GetCurrentStockHandler(this.inventory);
    }

    buildAddProductHandler(): AddProductHandler {
        return new AddProductHandler(this.inventory);
    }
}

describe('For Managing Products Port', () => {
    let configurator: InventoryConfigurator

    beforeAll(async () => {
        configurator = InventoryConfigurator.forTest()
    })

    describe('When we ask the current stock of an existing product', () => {
        it('Should return a product stock object as response with available units', () => {
            const query = new GetCurrentStock('existing-product-id')
            const handler = configurator.buildGetCurrentStockHandler()
            const result = handler.handle(query)
            const stock = result.unwrap()
            expect(stock).toEqual({
                id: 'existing-product-id',
                name: 'existing-product-name',
                quantity: 10
            })
        })
    })
    describe('When we ask the current stock of a non existing product', () => {
        it('Should return an error', () => {
            const query = new GetCurrentStock('no-existing-product-id')
            const handler = configurator.buildGetCurrentStockHandler()
            const result = handler.handle(query)
            expect(() => { result.unwrap() }).toThrowError()
            expect(result.errorMessage()).toEqual(`Product with id no-existing-product-id not found`)
        })
    })
    describe('When we ask the current stock of a product with no stock left', () => {
        it('Should return an error', () => {
            const query = new GetCurrentStock('out-of-stock-product-id')
            const handler = configurator.buildGetCurrentStockHandler()
            const result = handler.handle(query)
            expect(() => { result.unwrap() }).toThrowError()
            expect(result.errorMessage()).toEqual(`Product with id out-of-stock-product-id is out of stock`)
        })
    })
    describe('When we ask with an invalid product id', () => {
        it('Should return an error', () => {
            const query = new GetCurrentStock('')
            const handler = configurator.buildGetCurrentStockHandler()
            const result = handler.handle(query)
            expect(() => { result.unwrap() }).toThrowError(Error)
            expect(result.errorMessage()).toEqual('Invalid product id []')
        })
    })
    describe('When we add a product that is not in our database', () => {
        let result: AddProductResponse

        beforeAll(async () => {
            // add the product
            const command = new AddProduct('ProductName', 100)
            const handler = configurator.buildAddProductHandler()
            result = handler.handle(command)
        })

        it('should confirm the identifier of the added product', () => {
            expect(result.unwrap()).toEqual('new-product-id')
        })

        it('should store in the database so I can get its information', () => {
            const newProductId = result.unwrap()

            // check if product was added
            expectProductWasStored(newProductId, 'ProductName', 100)

            function expectProductWasStored(newProductId: string, newProductName: string, newProductQuantity: number) {
                const query = new GetCurrentStock(newProductId);
                const stockHandler = configurator.buildGetCurrentStockHandler();
                const stockResult = stockHandler.handle(query);
                const stock = stockResult.unwrap();
                expect(stock).toEqual({
                    id: newProductId,
                    name: newProductName,
                    quantity: newProductQuantity
                });
            }
        })
    })

    describe('When we try to register products without correct data', () => {
        it('should fail if a valid name is not provided', () => {
            const command = new AddProduct('', 100)
            const handler = configurator.buildAddProductHandler()
            const result = handler.handle(command)
            expect(result.error()).toBeInstanceOf(InvalidProductName)
        })
    })
})