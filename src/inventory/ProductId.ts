export class ProductId {
    private constructor(private id: string) { }

    static validatedFrom(id: string): ProductId {
        if (id.length === 0) {
            throw new Error(`Invalid product id [${id}]`);
        }
        return new ProductId(id);
    }

    toString(): string {
        return this.id;
    }
}
