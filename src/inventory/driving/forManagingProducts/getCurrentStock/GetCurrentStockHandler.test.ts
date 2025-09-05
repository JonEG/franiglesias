import { describe, it, expect } from 'vitest';
import { GetCurrentStock } from './GetCurrentStock';
import { GetCurrentStockHandler } from './GetCurrentStockHandler';
import { InventoryStub } from '../../../Inventory';

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
                stock: 10
            })
        })
    })
})