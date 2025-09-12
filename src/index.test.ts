import { describe, it, expect } from 'vitest';
import { GetCurrentStock } from './inventory/driving/forManagingProducts/getCurrentStock/GetCurrentStock';
import { GetCurrentStockHandler } from './inventory/driving/forManagingProducts/getCurrentStock/GetCurrentStockHandler';
import { Inventory } from './inventory/Inventory';
import { InMemoryProductStorage } from './driven/forStoringProducts/InMemoryProductStorage';

function BuildGetCurrentStockHandler(): GetCurrentStockHandler {
    const examples = new Map<string, Object>([
        ['existing-product-id', {
            id: 'existing-product-id',
            name: 'existing-product-name',
            quantity: 10
        }]
    ])
    return new GetCurrentStockHandler(new Inventory(new InMemoryProductStorage(examples)))
}

describe('For Managing Products Port', () => {
    describe('When we ask the current stock of an existing product', () => {
        it('Should return a product stock object as response with available units', () => {
            const query = new GetCurrentStock('existing-product-id')
            const handler = BuildGetCurrentStockHandler()
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
            const handler = BuildGetCurrentStockHandler()
            const result = handler.handle(query)
            expect(() => {result.unwrap()}).toThrowError()
            expect(result.errorMessage()).toEqual(`Product with id no-existing-product-id not found`)
        })
    })
})