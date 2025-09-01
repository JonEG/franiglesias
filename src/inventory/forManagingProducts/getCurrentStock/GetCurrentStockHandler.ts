import { GetCurrentStock } from "./GetCurrentStock";
import { GetCurrentStockResponse } from "./GetCurrentStockResponse";


export class GetCurrentStockHandler {
    handle(query: GetCurrentStock): GetCurrentStockResponse {
        return GetCurrentStockResponse.withError(`Product with id ${(query.productId)} does not exist`)
    }
}
