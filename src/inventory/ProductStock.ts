
export class ProductStock {
    constructor(private readonly id: string, private readonly name: string, private readonly stock: number) { }

    print(): object {
        return {
            id: this.id,
            name: this.name,
            stock: this.stock
        };
    }
}
