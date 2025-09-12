import type { ForStoringProducts } from "../../../src/inventory/driven/forStoringProducts/ForStoringProducts";


export class ProductStorageNoStockProductStub implements ForStoringProducts {
    constructor() { }

    getById(productId: string): { id: string; name: string; quantity: number; } {
        return {
            id: 'out-of-stock-product-id',
            name: 'out-of-stock-product-name',
            quantity: 0,
        };
    }
}
