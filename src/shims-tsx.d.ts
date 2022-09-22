import Vue, { VNode } from 'vue';

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        interface Element extends VNode {}

        // tslint:disable no-empty-interface
        interface ElementClass extends Vue {}

        // Produziert:
        //      Duplicate index signature for type 'string'.
        //          [elem: string]: string;
        //
        // interface IntrinsicElements {
        //     // tslint:disable-next-line:no-any
        //     [elem: string]: string;
        // }
    }
}
