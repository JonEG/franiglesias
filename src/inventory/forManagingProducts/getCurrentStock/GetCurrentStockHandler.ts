import { InMemoryProducts } from "../../../driven/forRetrievingProducts/InMemoryProducts";
import { ProductId } from "../../forRetrievingProducts/ForRetrievingProducts";
import { GetCurrentStock } from "./GetCurrentStock";
import { GetCurrentStockResponse } from "./GetCurrentStockResponse";


export class GetCurrentStockHandler {
    private productRepository: InMemoryProducts

    constructor() {
        this.productRepository = new InMemoryProducts()
    }

    handle(query: GetCurrentStock): GetCurrentStockResponse {
        const productId = new ProductId(query.productId)
        const product = this.getProductById(productId)
        if(!product){
            return GetCurrentStockResponse.withError(`Product with id ${(productId)} does not exist`)
        }
        return GetCurrentStockResponse.withError(`Product with id ${(productId)} is out of stock`)
    }

    private getProductById(productId: ProductId) {
        return this.productRepository.getProductById(productId)
    }
}
