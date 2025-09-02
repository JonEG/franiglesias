import { GetCurrentStock } from "./GetCurrentStock";
import { GetCurrentStockResponse } from "./GetCurrentStockResponse";
import { InMemoryProducts } from "./InMemoryProducts";


export class GetCurrentStockHandler {
    private productRepository: InMemoryProducts

    constructor() {
        this.productRepository = new InMemoryProducts()
    }

    handle(query: GetCurrentStock): GetCurrentStockResponse {
        const product = this.productRepository.getProductById(query.productId)
        if(!product){
            return GetCurrentStockResponse.withError(`Product with id ${(query.productId)} does not exist`)
        }
        return GetCurrentStockResponse.withError(`Product with id ${(query.productId)} is out of stock`)
    }
}
