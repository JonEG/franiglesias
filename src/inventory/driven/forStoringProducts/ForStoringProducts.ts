export interface ForStoringProducts {
    getById(productId: string): { id: string; name: string; quantity: number; } | undefined;

    store(productId: string, product: { id: string; name: string; quantity: number }): void
}
