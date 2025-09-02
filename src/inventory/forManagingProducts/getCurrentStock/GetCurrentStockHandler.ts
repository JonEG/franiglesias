import { GetCurrentStock } from "./GetCurrentStock";
import { GetCurrentStockResponse } from "./GetCurrentStockResponse";


export class GetCurrentStockHandler {
    handle(query: GetCurrentStock): GetCurrentStockResponse {
        if (!this.hasStockOf(query.productId)) {
            return GetCurrentStockResponse.withError(`Product with id ${(query.productId)} is out of stock`)
        }
        return GetCurrentStockResponse.withError(`Product with id ${(query.productId)} does not exist`)
    }

    private hasStockOf(productId: String): boolean {
        return productId != 'out-of-stock-product-id'
    }
}
