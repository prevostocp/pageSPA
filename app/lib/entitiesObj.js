import { CrudContext, FormStrategy, TableStrategy } from "./strategy.js";
import ajax from "../helpers/ajax.js";

let aObjectsEntity = [];
const crudContext = new CrudContext("", "", "");

export function loadEntityFa(ent) {
  limpiarHTML(ent.elements.root);
  console.log(ent.getEntities, "url");
  ajax({
    url: ent.getEntities,
    options: {},
    cbSuccess: (elements) => {
      aObjectsEntity = [...elements];

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
    method: entidad.method,
  };

  ajax({
    url: entidad.getEntities + "/" + id,
    options: options,
    cbSuccess: () => {
      loadEntityFa(entidad, elementHTML, spinner);
    },
  });
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
      limpiarHTML(props.elements.root);
      loadEntityFa(props);
    },
  });
}

export function saveEntity(props, action) {
  const { values } = props;

  // Codigo temporal hasta que se agregue description
  const tempValues = {
    name: values.name,
    symbol: values.symbol,
  };

  let options = {
    method: props.method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    //body: JSON.stringify(props.values),
    body: JSON.stringify(tempValues),
  };

  ajax({
    url:
      action === "A"
        ? props.getEntities
        : props.getEntities + "/" + values.coin_id,
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
