export interface ForStoringProducts {
    getById(productId: string): { id: string; name: string; quantity: number; } | undefined;
}
