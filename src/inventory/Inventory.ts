import { ForStoringProducts } from "./ForStoringProducts";
import { ProductId } from "./ProductId";
import { ProductStock } from "./ProductStock";

export class Inventory {
    constructor(private storage: ForStoringProducts) {}

    stockById(productId: string): ProductStock {
        const pId = ProductId.validatedFrom(productId);
        const productData = this.storage.getById(pId.toString());

        if(!productData) {
            throw new Error(`Product with id ${productId} not found`);
        }

        return new ProductStock(
            productData.id,
            productData.name,
            productData.quantity
        );
    }
}

export class InventoryStub extends Inventory {
    stockById(productId: string): ProductStock {
        return new ProductStock(
            'existing-product-id',
            'existing-product-name',
            10
        );
    }
}

export class ProductStorageStub implements ForStoringProducts {
    constructor() { }

    getById(productId: string): { id: string; name: string; quantity: number; } {
        return {
            id: 'existing-product-id',
            name: 'existing-product-name',
            quantity: 10,
        };
    }
}