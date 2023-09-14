import { Loader } from "./components/Loader.js";
import { Container } from "./components/Container.js";
import { Router } from "./components/Router.js";
import { factoryEntity } from "./lib/entities.js";
import { CrudContext, TableStrategy } from "./strategy.js";

const $root = document.querySelector("#root");

export function App() {
  //limpiarHTML($root);

  //$root.appendChild(Container());
  //$root.appendChild(Coins());
  $root.appendChild(Loader());

  Router();

  // const $aToggle = document.querySelector("#aToggle");

  // $aToggle.addEventListener("click", () => {
  //   const $existeOpen = document.querySelector(".open");
  //   const $content = document.querySelector(".content");
  //   const $sidebar = document.querySelector(".sidebar");
  //   if (!$existeOpen) {
  //     $content.classList.add("open");
  //     $sidebar.classList.add("open");
  //   } else {
  //     $content.classList.remove("open");
  //     $sidebar.classList.remove("open");
  //   }
  // });
  enventsListeners();
}

function enventsListeners() {
  const $aCoin = document.querySelector("#aCoin");
  $aCoin.addEventListener("click", () => {
    factoryEntity("coin", "load");
  });

  const $aCoinF = document.querySelector("#aCoinF");
  $aCoinF.addEventListener("click", () => {
    ajax({
      url: ent.getCoins,
      cbSuccess: (elements) => {
        aObjectsEntity = [...elements];
      },
    });

    createABM(new TableStrategy());
  });

  // const $btnNew = document.querySelector("#btnNew-coin");
  // $btnNew.addEventListener("click");
}

function createABM(strategy) {
  const crudContext = new CrudContext(strategy, aObjectsEntity, $root);
  crudContext.show();
}

// function limpiarHTML(node) {
//   while (node.firstChild) {
//     node.remove(node.firstChild);
//   }
// }
