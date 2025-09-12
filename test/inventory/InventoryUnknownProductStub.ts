import { Inventory } from "../../src/inventory/Inventory";
import { ProductStorageNoProductStub } from "../driven/forStoringProducts/ProductStorageNoProductStub";


export class InventoryUnknownProductStub extends Inventory {
    constructor() {
        super(new ProductStorageNoProductStub());
    }

    stockById(productId: string): any {
        throw new Error(`Product with id ${productId} not found`);
    }
}
