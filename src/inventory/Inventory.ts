
import type { ForStoringProducts } from "./driven/forStoringProducts/ForStoringProducts";
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

export class InventoryUnknownProductStub extends Inventory {
    constructor() {
        super(new ProductStorageNoProductStub())
    }

    stockById(productId: string): any {
        throw new Error(`Product with id ${productId} not found`);
    }
}

export class InventoryNoStockProductStub extends Inventory {
    constructor() {
        super(new ProductStorageNoStockProductStub())
    }

    stockById(productId: string): any {
        throw new Error(`Product with id ${productId} is out of stock`);
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

export class ProductStorageNoProductStub implements ForStoringProducts {
    constructor() { }
    
    getById(productId: string): undefined {}
}

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