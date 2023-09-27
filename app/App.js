//import { Loader } from "./components/Loader.js";
//import { factoryEntity } from "./lib/entities.js";
import { Entity } from "./lib/Entity.js";
import api from "./helpers/ic_app.js";
import { loadEntityFa, editElement, deleteElement } from "./lib/entitiesObj.js";
import { Spinner } from "./components/Spinner.js";

(function() {
  const $root = document.querySelector("#root");
  const $spinner = document.querySelector("#spinnerNew");

  function enventsListeners() {
    // const $aCoin = document.querySelector("#aCoin");
    // $aCoin.addEventListener("click", () => {
    //   factoryEntity("coin", "load");
    // });
  
    const $aCoinFa = document.querySelector("#aCoinFa");
    $aCoinFa.addEventListener("click", () => {
      $spinner.appendChild(Spinner());
      const entidad = createEntidad("coin", {
        root: $root,
        spinner: $spinner,
      });
      loadEntityFa(entidad);
    });
  
    window.addEventListener("click", (e) => {
      if (e.target.dataset.entidad !== undefined) {      
        const entidad = createEntidad("coin", {
          root: $root,
          spinner: $spinner,
        });
        if (e.target.dataset.action === "delete") {
          const datos = {
            entidad: e.target.dataset.entidad,
            id: e.target.dataset.id,
            elementHTML: $root,
            spinner: $spinner,
            entidad: entidad,
          };
          entidad.method = "DELETE"
          deleteElement(datos);
        } else if (e.target.dataset.action === "edit") {
          entidad.method = "PUT";
          
          editElement(entidad, e.target.dataset.id);
        }
      }
    });
  }

  function createEntidad(name, elements) {
    if (name === "coin") {
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
        // {
        //   name: "pathImg",
        //   control: "input",
        //   type: "file",
        //   value: "",
        // },
        // {
        //   name: "Image",
        //   control: "img",
        //   type: "",
        //   value: "",
        // },
      ];
  
      entidad.values = {
        name: "",
        symbol: "",
        //pathImg: "",
      };
  
      entidad.elements = {
        root: elements.root,
        spinner: elements.spinner,
      };
  
      entidad.setEntities(api.COINS);
      entidad.entity = "coin";
  
      return entidad;
    }
  }

  function App() {
  
    enventsListeners();
  }
})();

export default App;



// function createABM(strategy) {
//   const crudContext = new CrudContext(strategy, aObjectsEntity, $root);
//   crudContext.show();
// }


