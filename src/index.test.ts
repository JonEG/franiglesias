import { describe, it, expect } from 'vitest';
import { GetCurrentStock } from './inventory/forManagingProducts/getCurrentStock/GetCurrentStock';
import { GetCurrentStockHandler } from './inventory/forManagingProducts/getCurrentStock/GetCurrentStockHandler';

describe('For Managing Products Port', () => {
    describe('When we ask the current stock of a not existing product', () => {
        it('Should fail with Unknown Product Error', () => {
            const query = new GetCurrentStock('no-exists-product-id')
            const handler = new GetCurrentStockHandler()
            const response = handler.handle(query)
            expect(response.success()).toBeFalsy()
            expect(response.error()).toEqual("Product with id no-exists-product-id does not exist")
        })
    })
    describe('When we ask the current stock of an out of stock product', () => {
        it('Should fail with Out Of Stock Error', () => {
            const query = new GetCurrentStock('out-of-stock-product-id')
            const handler = new GetCurrentStockHandler()
            const response = handler.handle(query)
            expect(response.success()).toBeFalsy()
            expect(response.error()).toEqual("Product with id out-of-stock-product-id is out of stock")
        })
    })
})
