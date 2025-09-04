import { InvalidIdentifierError } from "../forRetrievingProducts/InvalidIdentifierError";


export class ProductId {
    private readonly productId: String;

    constructor(productId: String) {
        this.productId = productId;
    }

    static validFrom(productId: string): any {
        if (productId.trim().length === 0) {
            throw new InvalidIdentifierError(`Product Id should not be empty`)
        }
        return new ProductId(productId)
    }

    toString(): String {
        return this.productId;
    }

    isEmpty(): boolean {
        return this.productId === "";
    }
}
