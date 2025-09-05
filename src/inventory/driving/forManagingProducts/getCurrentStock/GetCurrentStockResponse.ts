export class GetCurrentStockResponse {
    private constructor(private readonly result: object, private readonly error: string | undefined) { }

    static withResult(result: object) {
        return new GetCurrentStockResponse(result, undefined);
    }

    unwrap() {
        return this.result;
    }
}
