
export class ProductStock {
    constructor(private readonly id: string, private readonly name: string, private readonly quantity: number) { }

    print(): object {
        return {
            id: this.id,
            name: this.name,
            quantity: this.quantity
        };
    }
}
