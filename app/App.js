import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";
import { factoryEntity } from "./lib/entities.js";

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

  const $aCoinFa = document.querySelector("#aCoinFa");
  $aCoin.addEventListener("click", () => {
    const entidad = new Entity("List " + "coins", "coins");
    entidad.columns = ["Name", "Symbol", "Image"];
    entidad.setEntities = api.COINS;
    loadEntityFa(entidad)
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
