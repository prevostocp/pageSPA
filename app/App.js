import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Coins } from "./components/Coins.js";
import { Router } from "./components/Router.js";

export function App() {
  const $root = document.querySelector("#root");

  limpiarHTML($root);

  $root.appendChild(Header());
  $root.appendChild(Coins());
  $root.appendChild(Loader());

  Router();
}

function limpiarHTML(node) {
  while (node.firstChild) {
    node.remove(node.firstChild);
  }
}
