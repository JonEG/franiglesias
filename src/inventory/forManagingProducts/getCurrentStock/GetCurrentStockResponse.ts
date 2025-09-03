export class GetCurrentStockResponse {
    private result: Object | undefined
    private errorMessage: string

    constructor(result: Object | undefined , errorMessage: string) {
        this.result = result
        this.errorMessage = errorMessage
    }

    static withError(message: string): GetCurrentStockResponse {
        return new GetCurrentStockResponse(undefined, message)
    }

    static withSuccess(product: object): GetCurrentStockResponse {
        return new GetCurrentStockResponse(product, "")
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

    payload(): Object | undefined {
        return this.result;
    }
}
