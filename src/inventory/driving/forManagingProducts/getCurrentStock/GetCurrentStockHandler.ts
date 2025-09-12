import { Inventory } from "../../../Inventory";
import { GetCurrentStock } from "./GetCurrentStock";
import { GetCurrentStockResponse } from "./GetCurrentStockResponse";

export class GetCurrentStockHandler {
    private readonly inventory: Inventory

    constructor(inventory: Inventory) {
        this.inventory = inventory
    }

    handle(query: GetCurrentStock): GetCurrentStockResponse  {
        try {
            const productStock = this.inventory.stockById(query.productId)

            if(productStock.isOutOfStock()) {
                return GetCurrentStockResponse.withError(`Product with id ${query.productId} is out of stock`)
            }

            return GetCurrentStockResponse.withResult(productStock.print())
        } catch (e) {
            return GetCurrentStockResponse.withError((e as Error).message)
        }
    }
}
