import type { ForStoringProducts } from "../../../src/inventory/driven/forStoringProducts/ForStoringProducts";

export class ProductStorageNoProductStub implements ForStoringProducts {
    getById(productId: string): undefined {}

    store(productId: string, product: { id: string; name: string; quantity: number; }): void {
        // No operation needed for the stub
    }
}