import { CrudContext, FormStrategy, TableStrategy } from "./strategy.js";
import { ajax } from "../helpers/ajax.js";

let aObjectsEntity = [];
const crudContext = new CrudContext("", "", "");

export function loadEntityFa(ent, elementHTML) {
  document.querySelector(".loader").style.display = "block";
  ajax({
    url: ent.getEntities,
    cbSuccess: (elements) => {
      aObjectsEntity = [...elements];

      createInterface(elementHTML, ent.columns, ent.title);
    },
  });
}

function createInterface(elementHTML, columns, title) {
  limpiarHTML(elementHTML);
  const tableStrategy = new TableStrategy();
  // crudContext.setData(aObjectsEntity);
  // crudContext.setElement(elementHTML);
  // crudContext.setColumns(columns);
  // crudContext.setStrategy(tableStrategy);
  crudContext.setProps({
    strategy: tableStrategy,
    data: aObjectsEntity,
    element: elementHTML,
    columns: columns,
    title: title,
  });

  crudContext.show();
}

function limpiarHTML(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
