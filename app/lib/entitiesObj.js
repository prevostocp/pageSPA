import { CrudContext, FormStrategy, TableStrategy } from "./strategy.js";
import { ajax } from "../helpers/ajax.js";

let aObjectsEntity = [];
const crudContext = new CrudContext("", "", "");

export function loadEntityFa(ent, rootHTML, spinnerHTML) {
  limpiarHTML(rootHTML);
  ajax({
    url: ent.getEntities,
    options: {},
    cbSuccess: (elements) => {
      aObjectsEntity = [...elements];

      createInterface(rootHTML, ent);
      limpiarHTML(spinnerHTML);
    },
  });
}

export function createEntity(element) {
  //console.log(element);
}

export function deleteElement(entidad, id) {}

function createInterface(elementHTML, ent) {
  limpiarHTML(elementHTML);
  const tableStrategy = new TableStrategy();
  const { columns, title, entity, values, addUrl } = ent;

  crudContext.setProps({
    strategy: tableStrategy,
    data: aObjectsEntity,
    element: elementHTML,
    columns,
    title,
    entity,
    values,
    addUrl,
  });

  crudContext.show();
}

export function createInterfaceForm(ent) {
  limpiarHTML(ent.element);
  const formStrategy = new FormStrategy();
  const { columns, title, entity, values, addUrl } = ent;

  crudContext.setProps({
    strategy: formStrategy,
    element: ent.element,
    columns,
    title,
    entity,
    values,
    addUrl,
  });

  crudContext.show();
}

export function saveNewEntity(props) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(props.values),
  };
  console.log(props);
  // ajax({
  //   url: props.entity.getEntities,
  //   options: options,
  //   cbSuccess: (result) => {
  //     console.log(result);
  //   },
  // });
}

function limpiarHTML(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
