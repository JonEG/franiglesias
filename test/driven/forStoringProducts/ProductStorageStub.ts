import type { ForStoringProducts } from "../../../src/inventory/driven/forStoringProducts/ForStoringProducts";


export class ProductStorageStub implements ForStoringProducts {
    getById(productId: string): { id: string; name: string; quantity: number; } {
        return {
            id: 'existing-product-id',
            name: 'existing-product-name',
            quantity: 10,
        };
    }

    store(productId: string, product: { id: string; name: string; quantity: number; }): void {
        // No operation needed for the stub
    }
}
