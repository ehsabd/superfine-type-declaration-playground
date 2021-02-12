import { h, text, patch } from './node_modules/superfine/index.js';
const setState = (state) => patch(document.getElementById("app"), h("main", {}, [
    h("h1", {}, text(state + '')),
    h("button", { onclick: () => setState(state - 1) }, text("-")),
    h("button", { onclick: () => setState(state + 1) }, text("+")),
]));
console.log(setState(0));
