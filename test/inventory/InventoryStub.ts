import { Inventory } from "../../src/inventory/Inventory";
import { ProductStock } from "../../src/inventory/ProductStock";



export class InventoryStub extends Inventory {
    stockById(productId: string): ProductStock {
        return new ProductStock(
            'existing-product-id',
            'existing-product-name',
            10
        );
    }
}
