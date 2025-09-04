import { InMemoryProducts } from "../../../driven/forRetrievingProducts/InMemoryProducts";
import { ProductId } from "../../product/ProductId";
import { GetCurrentStock } from "./GetCurrentStock";
import { GetCurrentStockResponse } from "./GetCurrentStockResponse";
import { ForRetrievingProducts } from "../../forRetrievingProducts/ForRetrievingProducts";

type ProductStock = {
    id: ProductId
    name: string
    stock: number
}

export class GetCurrentStockHandler {
    private productRepository: ForRetrievingProducts

    constructor() {
        this.productRepository = new InMemoryProducts()
    }

    handle(query: GetCurrentStock): GetCurrentStockResponse {
        try {
            const productId = ProductId.ensureValid(query.productId)
            const product = this.getProductById(productId) as ProductStock

            if (product.stock == 0) {
                throw Error(`Product with id ${(productId)} is out of stock`)
            }

            return GetCurrentStockResponse.withSuccess(product)
        } catch (e) {
            return GetCurrentStockResponse.withError((e as Error).message as string)
        }
    }

    private getProductById(productId: ProductId): ProductStock {
        const product = this.productRepository.getProductById(productId) as ProductStock | undefined

        if (!product) {
            throw Error(`Product with id ${(productId)} does not exist`);
        }

        return product;
    }

}
