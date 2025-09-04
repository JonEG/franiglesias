import { InvalidIdentifierError } from "../forRetrievingProducts/InvalidIdentifierError";


export class ProductId {
    private readonly productId: String;

    constructor(productId: String) {
        this.productId = productId;
    }

    /**
     * Ensures the productId is valid.
     * @throws {InvalidIdentifierError} if the productId is empty or invalid
     */
    static ensureValid(productId: string): ProductId {
        if (productId.trim().length === 0) {
            throw new InvalidIdentifierError('Invalid product id')
        }
        return new ProductId(productId)
    }

    toString(): String {
        return this.productId;
    }
}
