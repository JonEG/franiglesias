import { describe, it, expect } from 'vitest';
import { IdentityProvider, Inventory } from "./Inventory"
import { ProductStock } from "./ProductStock"
import { ProductStorageStub } from '../../test/driven/forStoringProducts/ProductStorageStub';
import { ProductStorageNoProductStub } from '../../test/driven/forStoringProducts/ProductStorageNoProductStub';

describe('Inventory', () => {
    it('should return a ProductStock providing and id', () => {
        const inventory = new Inventory(new ProductStorageStub(), new IdentityProvider())
        let expected = new ProductStock(
            'existing-product-id',
            'existing-product-name',
            10
        )
        expect(inventory.stockById('existing-product-id')).toEqual(expected)
    })
    it('should throw Error if no product found', () => {
        const inventory = new Inventory(new ProductStorageNoProductStub(), new IdentityProvider())
        expect(() => {
            inventory.stockById('no-existing-product-id')
        }).toThrowError(`Product with id no-existing-product-id not found`)
    })
})