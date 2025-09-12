import { describe, it, expect } from 'vitest';
import { GetCurrentStock } from './GetCurrentStock';
import { GetCurrentStockHandler } from './GetCurrentStockHandler';
import { InventoryOutOfStockProductStub } from "../../../../../test/inventory/InventoryNoStockProductStub";
import { InventoryUnknownProductStub } from "../../../../../test/inventory/InventoryUnknownProductStub";
import { InventoryStub } from '../../../../../test/inventory/InventoryStub';

describe('GetCurrentStockHandler', () => {
    describe('When we ask the current stock of an existing product', () => {
        it('Should return a product stock object as response with available units', () => {
            const query = new GetCurrentStock('existing-product-id')
            const handler = new GetCurrentStockHandler(new InventoryStub())
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
            const handler = new GetCurrentStockHandler(new InventoryUnknownProductStub())
            const result = handler.handle(query)
            expect(() => {result.unwrap()}).toThrowError()
            expect(result.errorMessage()).toEqual('Product with id no-existing-product-id not found')
        })
    })
    describe('When we ask the current stock of an out of stock product', () => {
        it('should throw Error if empty stock', () => {
            const query = new GetCurrentStock('out-of-stock-product-id')
            const handler = new GetCurrentStockHandler(new InventoryOutOfStockProductStub())
            const result = handler.handle(query)
            expect(() => {result.unwrap()}).toThrowError()
            expect(result.errorMessage()).toEqual(`Product with id out-of-stock-product-id is out of stock`)
        })
    })
    
})