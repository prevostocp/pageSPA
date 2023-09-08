import api from "./helpers/ic_app.js";
import { ajax } from "./helpers/ajax.js";
import { Title } from "./components/Title.js";

export function App() {
  const d = document;
  const $root = d.querySelector("#root");
  $root.appendChild(Title());
}
