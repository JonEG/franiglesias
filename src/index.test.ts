import { describe, it, expect } from 'vitest';
import { GetCurrentStock } from './inventory/driving/forManagingProducts/getCurrentStock/GetCurrentStock';
import { GetCurrentStockHandler } from './inventory/driving/forManagingProducts/getCurrentStock/GetCurrentStockHandler';

function BuildGetCurrentStockHandler(): GetCurrentStockHandler {
    return new GetCurrentStockHandler()
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
                stock: 10
            })
        })
    })
})