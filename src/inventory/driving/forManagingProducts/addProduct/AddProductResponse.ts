export class AddProductResponse {
    constructor(private readonly result: string)
    {}

    unwrap(): string {
        return this.result;
    }
}