
import type { ForStoringProducts } from "./driven/forStoringProducts/ForStoringProducts";
import { ProductId } from "./ProductId";
import { ProductStock } from "./ProductStock";

export class Inventory {
    constructor(private readonly storage: ForStoringProducts, private readonly identityProvider: ForGettingIdentities)
    {}

    stockById(productId: string): ProductStock {
        const pId = ProductId.validatedFrom(productId);
        const productData = this.storage.getById(pId.toString());

        if(!productData) {
            throw new Error(`Product with id ${productId} not found`);
        }

        return new ProductStock(
            productData.id,
            productData.name,
            productData.quantity
        );
    }

    registerProduct(name: string, initialQuantity: number) {
        const newProductId = this.identityProvider.generate()

        this.storage.store(newProductId, {id: newProductId, name: name, quantity: initialQuantity})

        return newProductId
    }
}

export class IdentityProvider implements ForGettingIdentities {
    generate() {
        return 'new-product-id'
    }
}

export interface ForGettingIdentities {
    generate(): string
}