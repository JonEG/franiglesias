import { describe, it, expect } from 'vitest';

describe('For Managing Products Port', () => {
    describe('When we ask the current stock of a not existing product', () => {
        it('Should fail with Unknown Product Error', () => {
            const query = new GetCurrentStock('no-exists-product-id')
            const handler = new GetCurrentStockHandler()
            expect(() => handler.handle(query)).toThrow(UnknownProduct)
        })
    })
})