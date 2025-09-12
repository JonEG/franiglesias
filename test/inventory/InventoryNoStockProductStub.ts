import { Inventory } from "../../src/inventory/Inventory";
import { ProductStorageNoStockProductStub } from "../driven/forStoringProducts/ProductStorageNoStockProductStub";


export class InventoryNoStockProductStub extends Inventory {
    constructor() {
        super(new ProductStorageNoStockProductStub());
    }

    stockById(productId: string): any {
        throw new Error(`Product with id ${productId} is out of stock`);
    }
}
