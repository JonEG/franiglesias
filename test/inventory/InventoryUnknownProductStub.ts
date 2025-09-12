import type { ForStoringProducts } from "../../src/inventory/driven/forStoringProducts/ForStoringProducts";
import { Inventory } from "../../src/inventory/Inventory";
import type { ProductStock } from "../../src/inventory/ProductStock";


export class InventoryUnknownProductStub extends Inventory {
    constructor() {
        super({} as ForStoringProducts)
    }

    stockById(productId: string): ProductStock {
        throw new Error(`Product with id ${productId} not found`);
    }
}
