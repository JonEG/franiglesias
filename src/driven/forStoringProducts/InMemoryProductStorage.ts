import type { ForStoringProducts } from "../../inventory/driven/forStoringProducts/ForStoringProducts";


export class InMemoryProductStorage implements ForStoringProducts {
    constructor(private products = new Map<string, Object>()) {}

    getById(productId: string): { id: string; name: string; quantity: number; } | undefined {
        return this.products.get(productId) as { id: string; name: string; quantity: number; } | undefined;
    }
}