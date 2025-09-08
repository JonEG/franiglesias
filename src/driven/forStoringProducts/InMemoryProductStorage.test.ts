import { InMemoryProductStorage } from './InMemoryProductStorage';
import { describe, it, expect } from 'vitest';

describe('InMemoryProductStorage', () => {
    it('should return undefined for non existing object', () => {
        const storage = new InMemoryProductStorage()
        expect(storage.getById('non-exisiting-product-id')).toBeUndefined()
    })

    it('should return stored objects', () => {
        const examples = new Map<string, Object>([
            ['pr-0001', {id: 'pr-0001', name: 'First product', stock: 100}],
        ])
        const storage = new InMemoryProductStorage(examples)
        expect(storage.getById('pr-0001')).toEqual(
            {id: 'pr-0001', name: 'First product', stock: 100}
        )
    })
})