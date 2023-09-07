import api from "./helpers/ic_app.js";

export function App() {
  document.querySelector("#root").innerHTML = `<h1>Prueba pagina SPA</h1>`;
  console.log(api);
}
