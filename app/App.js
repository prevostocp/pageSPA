import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";
import { factoryEntity } from "./lib/entities.js";
import { Entity } from "./lib/Entity.js";
import api from "./helpers/ic_app.js";
import { loadEntityFa } from "./lib/entitiesObj.js";

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

  const $aCoinFa = document.querySelector("#aCoinFa");
  $aCoinFa.addEventListener("click", () => {
    const entidad = new Entity("List " + "coins", "coins");
    entidad.columns = ["Name", "Symbol", "Image"];
    entidad.setEntities(api.COINS);

    loadEntityFa(entidad, $root);
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
