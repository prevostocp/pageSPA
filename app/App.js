import api from "./helpers/ic_app.js";
import { ajax } from "./helpers/ajax.js";

export function App() {
  document.querySelector("#root").innerHTML = `<h1>Prueba pagina SPA</h1>`;

  ajax({
    url: api.DOMAIN,
    cbSuccess: (coins) => {
      console.log(coins);
    },
  });

  console.log(api);
}
