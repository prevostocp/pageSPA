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

export function createEntity(element) {
  console.log(element);
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

export function createInterfaceForm(ent) {
  console.log(ent, "Volviendo");
  limpiarHTML(ent.element);
  const formStrategy = new FormStrategy();
  const { columns, title, entity } = ent;

  crudContext.setProps({
    strategy: formStrategy,
    element: ent.element,
    columns,
    title,
    entity,
  });

  crudContext.show();
}

export function saveNewEntity() {
  console.log("save new entity");
}

function limpiarHTML(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
