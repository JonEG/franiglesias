import { describe, it, expect } from 'vitest';
import { Inventory, ProductStorageNoProductStub, ProductStorageStub } from "./Inventory"
import { ProductStock } from "./ProductStock"

describe('Inventory', () => {
    it('should return a ProductStock providing and id', () => {
        const inventory = new Inventory(new ProductStorageStub())
        let expected = new ProductStock(
            'existing-product-id',
            'existing-product-name',
            10
        )
        expect(inventory.stockById('existing-product-id')).toEqual(expected)
    })
    it('should throw Error if no product found', () => {
        const inventory = new Inventory(new ProductStorageNoProductStub())
        expect(() => {
            inventory.stockById('no-existing-product-id')
        }).toThrowError(`Product with id no-existing-product-id not found`)
    })
})