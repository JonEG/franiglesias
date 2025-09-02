
export interface ForRetrievingProducts {
    getProductById(productId: ProductId): object | undefined;
}

export class ProductId {
    private readonly productId: String

    constructor(productId: String) {
        this.productId = productId
    }

    toString(): String {
        return this.productId
    }
}