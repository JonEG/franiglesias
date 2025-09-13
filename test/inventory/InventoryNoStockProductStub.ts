import type { ForStoringProducts } from "../../src/inventory/driven/forStoringProducts/ForStoringProducts";
import { Inventory, type ForGettingIdentities } from "../../src/inventory/Inventory";
import { ProductStock } from "../../src/inventory/ProductStock";

export class InventoryOutOfStockProductStub extends Inventory {
    constructor() {
        super({} as ForStoringProducts, {} as ForGettingIdentities)
    }

    stockById(productId: string): any {
        return new ProductStock(
            'existing-product-id',
            'existing-product-name',
            0
        )
    }
}
