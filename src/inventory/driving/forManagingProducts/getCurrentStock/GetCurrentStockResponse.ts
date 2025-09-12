export class GetCurrentStockResponse {
    private constructor(private readonly result: object | null, private readonly error: string | null) { }

    static withError(message: string) {
        return new GetCurrentStockResponse(null, message)
    }

    static withResult(result: {}) {
        return new GetCurrentStockResponse(result, null)
    }

    unwrap() {
        if (this.error && !this.result) {
            throw new Error(this.error)
        }
        return this.result
    }

    errorMessage(): string {
        return this.error!
    }
}
