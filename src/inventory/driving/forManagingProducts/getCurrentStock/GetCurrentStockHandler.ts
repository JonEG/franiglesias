import { Inventory } from "../../../Inventory";
import { GetCurrentStock } from "./GetCurrentStock";
import { GetCurrentStockResponse } from "./GetCurrentStockResponse";

export class GetCurrentStockHandler {
    private readonly inventory: Inventory

    constructor(inventory: Inventory) {
        this.inventory = inventory
    }

    handle(query: GetCurrentStock) {
        const productStock = this.inventory.stockById(query.productId)
        return GetCurrentStockResponse.withResult(productStock.print())
    }
}
