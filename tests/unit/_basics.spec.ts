import HelloWorld from '@/components/HelloWorld.vue';
import { shallowMount } from '@vue/test-utils';

interface Name {
    name: string,
    age: number
}

describe('Basics', () => {
    it('Object initialization', () => {
        const genName = (name: Name): string => {
            return `${name.name}, ${name.age}`
        }

        const result = genName(
            { name: 'Mike', age: 99 }
            )
        
        expect(result).toBe('Mike, 99')
    });
});
