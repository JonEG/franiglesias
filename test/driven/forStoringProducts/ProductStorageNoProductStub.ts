import type { ForStoringProducts } from "../../../src/inventory/driven/forStoringProducts/ForStoringProducts";


export class ProductStorageNoProductStub implements ForStoringProducts {
    constructor() { }

    getById(productId: string): undefined { }
}
