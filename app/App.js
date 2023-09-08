import api from "./helpers/ic_app.js";
import { ajax } from "./helpers/ajax.js";
//import { Title } from "./components/Title.js";
import { Header } from "./components/Header.js";

export function App() {
  const d = document;
  const $root = d.querySelector("#root");
  $root.appendChild(Header());
}
