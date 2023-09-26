import { CrudContext, FormStrategy, TableStrategy } from "./strategy.js";
import { ajax } from "../helpers/ajax.js";

let aObjectsEntity = [];
const crudContext = new CrudContext("", "", "");

export function loadEntityFa(ent) {
  limpiarHTML(ent.elements.root);

  ajax({
    url: ent.getEntities,
    options: {},
    cbSuccess: (elements) => {
      aObjectsEntity = [...elements];

      //createInterface(rootHTML, ent);
      createInterface(ent);
      limpiarHTML(ent.elements.spinner);
    },
  });
}

//export function createEntity(element) {
//console.log(element);
//}

export function deleteElement(data) {
  const { id, entidad, elementHTML, spinner } = data;

  let options = {
    method: "DELETE",
  };
  console.log(entidad.getEntities + "/" + id);
  ajax({
    url: entidad.getEntities + "/" + id,
    options: options,
    cbSuccess: (result) => {
      console.log(result);
      //aOjectTemp = aObjectsEntity.filter(e => e.id_codigo !== id);
      //aObjectsEntity = [...aOjectTemp];
      //limpiarHTML(elementHTML);
      console.log(entidad);
      loadEntityFa(entidad, elementHTML, spinner);
    },
  });
  //console.log("eliminando");
}

export function editElement(entidad, element) {
  const aObjectsEntityTemp = aObjectsEntity.find(
    (e) => e.coin_id === parseInt(element)
  );

  entidad.values = { ...aObjectsEntityTemp };

  createInterfaceForm(entidad);

  // aOjectTemp = aObjectsEntity.map((e) =>
  //   e.id_coin === element.id_coin ? element : e
  // );
  // aObjectsEntity = [...aOjectTemp];

  // let options = {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json; charset=UTF-8",
  //   },
  //   body: JSON.stringify(aObjectsEntity),
  // };

  // ajax({
  //   url: props.addUrl + "/" + id,
  //   options: options,
  //   cbSuccess: (result) => {
  //     console.log(result);
  //     //aOjectTemp = aObjectsEntity.filter(e => e.id_codigo !== id);
  //     //aObjectsEntity = [...aOjectTemp];
  //     limpiarHTML(elementHTML);
  //     loadEntityFa(entidad, elementHTML, spinner);
  //   },
  // });
}

function createInterface(ent) {
  limpiarHTML(ent.elements.root);
  const tableStrategy = new TableStrategy();
  //const { columns, title, entity, values, getEntities } = ent;

  // crudContext.setProps({
  //   strategy: tableStrategy,
  //   data: aObjectsEntity,
  //   element: elementHTML,
  //   columns,
  //   title,
  //   entity,
  //   values,
  //   addUrl: getEntities,
  // });

  ent.data = aObjectsEntity;
  ent.method = "POST";

  crudContext.setProps({
    strategy: tableStrategy,
    objEntity: ent,
  });

  crudContext.show();
}

export function createInterfaceForm(ent) {
  limpiarHTML(ent.elements.root);
  const formStrategy = new FormStrategy();
  //const { columns, title, entity, values, addUrl } = ent;

  // crudContext.setProps({
  //   strategy: formStrategy,
  //   element: ent.element,
  //   columns,
  //   title,
  //   entity,
  //   values,
  //   addUrl,
  //   objEntity: ent,
  // });

  crudContext.setProps({
    strategy: formStrategy,
    objEntity: ent,
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
    url: props.getEntities,
    options: options,
    cbSuccess: (result) => {
      console.log(props);

      limpiarHTML(props.elements.root);
      loadEntityFa(props);
    },
  });
}

export function saveEntity(props, action) {
  let options = {
    method: props.method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(props.values),
  };

  ajax({
    url: action === "A" ? props.getEntities : props.putEntitie + "/" + props.id,
    options: options,
    cbSuccess: (result) => {
      limpiarHTML(props.elements.root);
      loadEntityFa(props);
    },
  });
}

function limpiarHTML(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
