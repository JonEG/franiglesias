import type { Inventory } from '../../../Inventory';
import type { AddProduct } from './AddProduct';
import { AddProductResponse } from './AddProductResponse';


export class AddProductHandler {
    constructor(private readonly inventory: Inventory) { }

    handle(command: AddProduct): AddProductResponse {
        const newProductId = this.inventory.registerProduct(
            command.name,
            command.initialQuantity
        )
        return new AddProductResponse(newProductId)
    }
}
