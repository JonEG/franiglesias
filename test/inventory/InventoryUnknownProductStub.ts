import type { ForStoringProducts } from "../../src/inventory/driven/forStoringProducts/ForStoringProducts";
import { IdentityProvider, Inventory, type ForGettingIdentities } from "../../src/inventory/Inventory";
import type { ProductStock } from "../../src/inventory/ProductStock";


export class InventoryUnknownProductStub extends Inventory {
    constructor() {
        super({} as ForStoringProducts, {} as ForGettingIdentities)
    }

    stockById(productId: string): ProductStock {
        throw new Error(`Product with id ${productId} not found`);
    }
}
