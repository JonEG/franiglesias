import { ForRetrievingProducts, ProductId } from "../../inventory/forRetrievingProducts/ForRetrievingProducts";

export class InMemoryProducts implements ForRetrievingProducts {
    private products: Map<String, object> = new Map();

    constructor() {
        this.products.set('out-of-stock-product-id', {
            id: 'out-of-stock-product-id',
            name: 'Out of Stock Product',
            stock: 0
        });
        this.products.set('in-stock-product-id', {
            id: 'in-stock-product-id',
            name: 'In of Stock Product',
            stock: 10
        });
    }

    getProductById(productId: ProductId): object | undefined {
        return this.products.get(productId.toString());
    }
}
