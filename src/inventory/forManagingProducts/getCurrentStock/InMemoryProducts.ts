export class InMemoryProducts {
    private products: Map<String, object> = new Map();

    constructor() {
        this.products.set('out-of-stock-product-id', {
            id: 'out-of-stock-product-id',
            name: 'Out of Stock Product',
            stock: 0
        });
    }

    getProductById(productId: string): object | undefined {
        return this.products.get(productId);
    }
}
