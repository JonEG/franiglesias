import type { ForStoringProducts } from "../../src/inventory/driven/forStoringProducts/ForStoringProducts";
import { Inventory, type ForGettingIdentities } from "../../src/inventory/Inventory";
import { ProductStock } from "../../src/inventory/ProductStock";

export class InventoryStub extends Inventory {
    constructor() {
        super({} as ForStoringProducts, {} as ForGettingIdentities)
    }

    stockById(productId: string): ProductStock {
        return new ProductStock(
            'existing-product-id',
            'existing-product-name',
            10
        );
    }
}
