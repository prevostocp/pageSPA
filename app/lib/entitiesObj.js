import { CrudContext, FormStrategy, TableStrategy } from "./strategy.js";
import { ajax } from "../helpers/ajax.js";

let aObjectsEntity = [];
const crudContext = new CrudContext("", "", "");

export function loadEntityFa(ent, rootHTML, spinnerHTML) {
  limpiarHTML(rootHTML);
  ajax({
    url: ent.getEntities,
    cbSuccess: (elements) => {
      aObjectsEntity = [...elements];

      createInterface(rootHTML, ent);
      limpiarHTML(spinnerHTML);
    },
  });
}

function createInterface(elementHTML, ent) {
  limpiarHTML(elementHTML);
  const tableStrategy = new TableStrategy();
  const { columns, title, entity } = ent;

  crudContext.setProps({
    strategy: tableStrategy,
    data: aObjectsEntity,
    element: elementHTML,
    columns,
    title,
    entity,
  });

  crudContext.show();
}

function limpiarHTML(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
