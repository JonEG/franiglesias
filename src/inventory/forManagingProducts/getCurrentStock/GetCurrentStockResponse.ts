export class GetCurrentStockResponse {
    private result: unknown
    private errorMessage: string

    constructor(result: unknown, errorMessage: string) {
        this.result = result
        this.errorMessage = errorMessage
    }

    static withError(message: string): GetCurrentStockResponse {
        return new GetCurrentStockResponse(undefined, message)
    }

    success(): boolean {
        return !this.errorMessage
    }

    error(): string {
        if (!this.errorMessage) {
            throw new Error('Response was successful')
        }
        return this.errorMessage
    }
}
