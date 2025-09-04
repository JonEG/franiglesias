import { ProductId } from "../product/ProductId";

export interface ForRetrievingProducts {
    getProductById(productId: ProductId): object | undefined;
}
