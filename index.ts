import { h, text, patch } from 'superfine';

const setState = (state:number) =>
        patch(
          document.getElementById("app"),
          h("main", {}, [
            h("h1", {}, text(state+'')),
            h("button", { onclick: () => setState(state - 1) }, text("-")),
            h("button", { onclick: () => setState(state + 1) }, text("+")),
          ])
        )
      
      console.log(setState(0));