
import type { ForStoringProducts } from "./driven/forStoringProducts/ForStoringProducts";
import { ProductId } from "./ProductId";
import { ProductStock } from "./ProductStock";

export class Inventory {
    constructor(private storage: ForStoringProducts) {}

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
}
