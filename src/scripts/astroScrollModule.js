import { handleHorizontalScroll } from '/src/scripts/scroll.ts';

class AstroScroll extends HTMLElement {
    constructor() {
        super();
        handleHorizontalScroll();
    }
}

if (!customElements.get("astro-scroll")) {
    customElements.define("astro-scroll", AstroScroll);
}