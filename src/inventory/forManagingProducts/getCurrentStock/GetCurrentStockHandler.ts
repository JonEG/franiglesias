import { InMemoryProducts } from "../../../driven/forRetrievingProducts/InMemoryProducts";
import { ProductId } from "../../product/ProductId";
import { GetCurrentStock } from "./GetCurrentStock";
import { GetCurrentStockResponse } from "./GetCurrentStockResponse";

type ProductStock = {
    id: ProductId
    name: string
    stock: number
}

export class GetCurrentStockHandler {
    private productRepository: InMemoryProducts

    constructor() {
        this.productRepository = new InMemoryProducts()
    }

    handle(query: GetCurrentStock): GetCurrentStockResponse {
        const productId = new ProductId(query.productId)
        const product = this.getProductById(productId) as ProductStock | undefined
        if(productId.isEmpty()){
            return GetCurrentStockResponse.withError("Invalid product id")
        }
        if(!product){
            return GetCurrentStockResponse.withError(`Product with id ${(productId)} does not exist`)
        }
        if(product.stock == 0){
            return GetCurrentStockResponse.withError(`Product with id ${(productId)} is out of stock`)
        }
        return GetCurrentStockResponse.withSuccess(product)
    }

    private getProductById(productId: ProductId) {
        return this.productRepository.getProductById(productId)
    }
}
