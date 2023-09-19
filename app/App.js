import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";
import { factoryEntity } from "./lib/entities.js";
import { Entity } from "./lib/Entity.js";
import api from "./helpers/ic_app.js";
import { loadEntityFa } from "./lib/entitiesObj.js";
import { Spinner } from "./components/Spinner.js";

const $root = document.querySelector("#root");
const $spinner = document.querySelector("#spinnerNew");

export function App() {
  //limpiarHTML($root);

  //$root.appendChild(Container());
  //$root.appendChild(Coins());
  $root.appendChild(Loader());

  //Router();

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
    $spinner.appendChild(Spinner());

    const entidad = new Entity("List " + "coins", "coins");

    entidad.columns = [
      {
        name: "Name",
        control: "input",
        type: "text",
        value: "",
      },
      {
        name: "Symbol",
        control: "input",
        type: "text",
        value: "",
      },
      {
        name: "Image",
        control: "img",
        type: "",
        value: "",
      },
    ];

    entidad.setEntities(api.COINS);
    entidad.entity = "coin";

    loadEntityFa(entidad, $root, $spinner);
  });
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
