import type { Inventory } from '../../../Inventory';
import type { AddProduct } from './AddProduct';
import { AddProductResponse } from './AddProductResponse';


export class AddProductHandler {
    constructor(private readonly inventory: Inventory) { }

    handle(command: AddProduct): AddProductResponse {
        return new AddProductResponse()
    }
}
