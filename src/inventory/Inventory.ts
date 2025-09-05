import { ProductStock } from "./ProductStock";

export class Inventory {
    stockById(productId: string): ProductStock {
        throw new Error('Inventory not implemented')
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