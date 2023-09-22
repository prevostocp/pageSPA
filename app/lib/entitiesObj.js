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

//export function createEntity(element) {
  //console.log(element);
//}

export function deleteElement(data) {
  let options = {
    method: "DELETE",
  };
  ajax({
    url: props.addUrl + "/" + id,
    options: options,
    cbSuccess: (result) => {
      console.log(result);
      //aOjectTemp = aObjectsEntity.filter(e => e.id_codigo !== id);
      //aObjectsEntity = [...aOjectTemp];
      loadEntityFa(data.entidad, data.elementHTML, data.spinner);
    },
  });
  console.log("eliminando")
}

export function editElement(entidad, element) {
  console.log("editando")
  aOjectTemp = aObjectsEntity.map(e => e.id_coin === element.id_coin ? element : e );
  aObjectsEntity = [...aOjectTemp];

  let options = {
    method: "PUT",
    headers: {
      "Content-Type": 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(aObjectsEntity),
  };

  ajax({
    url: props.addUrl + "/" + id,
    options: options,
    cbSuccess: (result) => {
      console.log(result);
      //aOjectTemp = aObjectsEntity.filter(e => e.id_codigo !== id);
      //aObjectsEntity = [...aOjectTemp];
      loadEntityFa(data.entidad, data.elementHTML, data.spinner);
    },
  });
}

function createInterface(elementHTML, ent) {
  limpiarHTML(elementHTML);
  const tableStrategy = new TableStrategy();
  const { columns, title, entity, values, getEntities } = ent;

  crudContext.setProps({
    strategy: tableStrategy,
    data: aObjectsEntity,
    element: elementHTML,
    columns,
    title,
    entity,
    values,
    addUrl: getEntities,
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

  ajax({
    url: props.addUrl,
    options: options,
    cbSuccess: (result) => {
      console.log(result);
    },
  });
}

function limpiarHTML(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
