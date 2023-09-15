import { CrudContext, FormStrategy } from "./strategy.js";
import { ajax } from "../helpers/ajax.js";

let aObjectsEntity = [];
const crudContext = new CrudContext("", "", "");

export function loadEntityFa(ent) {
  
  document.querySelector(".loader").style.display = "block";
  ajax({
    url: ent.getEntities,
    cbSuccess: (elements) => {
      
      aObjectsEntity = [...elements];

      console.log(aObjectsEntity, "elements")
      //createInterface();
    
    },
  });
}

function createInterface() {
  limpiarHTML($root);
  const formStrategy = new FormStrategy();
  crudContext.setData = aObjectsEntity;
  crudContext.setElement = $root;
  crudContext.setStrategy(formStrategy);
  crudContext.show();
}

function limpiarHTML(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
