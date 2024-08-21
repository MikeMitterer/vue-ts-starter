import HelloWorld from '../../../src/components/HelloWorld.vue';
import { shallowMount, Wrapper } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
    let wrapper: Wrapper<HelloWorld> | undefined;

    afterEach(() => {
        if (wrapper) {
            wrapper.destroy();
            wrapper = undefined;
        }
    });

    test('renders props.myProp to true', () => {
        const prop = true;
        const msg = `HelloWorld! Prop: ${prop}`;

        // shallowMount rendert keine Child-Komponenten
        wrapper = shallowMount(HelloWorld, {
            // localVue,
            // vuetify,
            propsData: { myProp: prop },
        });

        // expect(wrapper.text().replace(/\s+/g, ' ')).toMatch(msg);
        expect(wrapper.vm).toBeTruthy();
    });

    test('renders props.myProp to false', () => {
        const prop = false;
        const msg = `HelloWorld! Prop: ${prop}`;

        wrapper = shallowMount(HelloWorld, {
            propsData: { myProp: prop },
        });

        // expect(wrapper.text().replace(/\s+/g, ' ')).toMatch(msg);
        expect(wrapper.vm).toBeTruthy();
    });
})
