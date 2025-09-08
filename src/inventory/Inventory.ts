import { ProductStock } from "./ProductStock";

export class Inventory {
    constructor(private storage: ForStoringProducts) {}

    stockById(productId: string): ProductStock {
        const pId = ProductId.validatedFrom(productId);
        const productData = this.storage.getById(pId.toString());

        return new ProductStock(
            productData.id,
            productData.name,
            productData.quantity
        );
    }
}

interface ForStoringProducts {
    getById(productId: string): { id: string; name: string; quantity: number };
}

export class ProductStorageStub implements ForStoringProducts {
    constructor() {}

    getById(productId: string): { id: string; name: string; quantity: number } {
        return {
            id: 'existing-product-id',
            name: 'existing-product-name',
            quantity: 10,
        }
    }
}

class ProductId {
    private constructor(private id: string) {}

    static validatedFrom(id: string): ProductId {
        if (!id || id.trim() === '') {
            throw new Error('Invalid product ID');
        }
        return new ProductId(id);
    }

    toString(): string {
        return this.id;
    }
}

export class InventoryStub extends Inventory {
    stockById(productId: string): ProductStock {
        return new ProductStock(
            'existing-product-id',
            'existing-product-name',
            10
        )
    }
}