import { CrudContext } from "./strategy.js";

let aObjectsEntity = [];

export function loadEntityFa(ent) {
  document.querySelector(".loader").style.display = "block";
  ajax({
    url: ent.getEntities,
    cbSuccess: (elements) => {

      aObjectsEntity = [...elements];

      createInterface();
    
    },
  });
}

function createInterface() {

}
