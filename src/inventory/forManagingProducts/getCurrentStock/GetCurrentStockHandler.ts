import { GetCurrentStock } from "./GetCurrentStock";
import { GetCurrentStockResponse } from "./GetCurrentStockResponse";
import { UnknownProduct } from "../UnknownProduct";


export class GetCurrentStockHandler {
    handle(query: GetCurrentStock): GetCurrentStockResponse {
        throw new UnknownProduct('Method not implemented.');
    }
}
