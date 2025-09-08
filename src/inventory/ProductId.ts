export class ProductId {
    private constructor(private id: string) { }

    static validatedFrom(id: string): ProductId {
        if (!id || id.trim() === '') {
            throw new Error('Invalid product ID');
        }
        return new ProductId(id);
    }

    toString(): string {
        return this.id;
    }
}
