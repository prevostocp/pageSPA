import { Loader } from "./components/Loader.js";
import { Container } from "./components/Container.js";
import { Router } from "./components/Router.js";

export function App() {
  const $root = document.querySelector("#root");

  limpiarHTML($root);

  //$root.appendChild(Container());
  //$root.appendChild(Coins());
  $root.appendChild(Loader());

  Router();

  const $aToggle = document.querySelector("#aToggle");

  $aToggle.addEventListener("click", () => {
    const $existeOpen = document.querySelector(".open");
    const $content = document.querySelector(".content");
    const $sidebar = document.querySelector(".sidebar");
    if (!$existeOpen) {
      $content.classList.add("open");
      $sidebar.classList.add("open");
    } else {
      $content.classList.remove("open");
      $sidebar.classList.remove("open");
    }
  });
}

function limpiarHTML(node) {
  while (node.firstChild) {
    node.remove(node.firstChild);
  }
}
