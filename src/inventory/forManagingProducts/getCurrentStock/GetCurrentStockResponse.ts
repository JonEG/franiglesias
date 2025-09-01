export class GetCurrentStockResponse {
    success(): boolean {
        return false
    }

    error(): string {
        return "Product with id no-exists-product-id does not exist"
    }
}
