import { ajax } from "../helpers/ajax.js";
import { Entity } from "./Entity.js";
import { FormEntity } from "../components/FormEntity.js";
import { CrudContext } from "./strategy.js"

let aObjectsEntity = [];

export function factoryEntity(entity, action) {
  const entidad = new Entity("List " + entity, entity);
  switch (entity) {
    case "coin":
      switch (action) {
        case "load":
          entidad.columns = ["Name", "Symbol", "Image"];
          //console.log(entidad)
          loadEntity(entidad);
          break;
        case "new":
          newEntity(entidad);
      }
  }
}

function loadEntity(ent) {
  document.querySelector(".loader").style.display = "block";
  ajax({
    url: ent.getCoins,
    cbSuccess: (elements) => {
      aObjectsEntity = [...elements];

      const htmlColumns = generateColumns(ent.columns);
      const htmlBodyTable = generateBody(aObjectsEntity);

      renderContainer(
        FormEntity({
          cols: htmlColumns,
          body: htmlBodyTable,
          title: ent.title,
          withForms: ent.withForms,
        })
      );
    },
  });
}

function newEntity(ent) {}

function generateColumns(columns) {
  const html = columns.reduce((ac, element) => {
    return (ac += `
     <th scope="col">${element}</th>
    `);
  }, "");

  return html;
}

function generateBody(elements) {
  try {
    const html = elements.reduce((ac, element) => {
      const { id, name, symbol, image } = element;

      return (ac += `
      <tr>
                                         
      <td><div class="m-2">${name}</div></td>
      <td><div class="m-2">${symbol}</div></td>
      <td><img src="${image}" alt="" class="m-2" /></td>                                        
      <td><button class="btn btn-outline-danger m-2" id="btnDelete-${id}" >Delete</botton></td>
      <td><button class="btn btn-outline-danger m-2" id="btnEdit-${id}">Edit</botton></td>
      </tr>
      `);
    }, "");

    return html;
  } catch (error) {
    return error;
  }
}

function renderContainer(html) {
  document.querySelector(".loader").style.display = "none";

  const divContainer = document.createElement("div");
  divContainer.innerHTML = html;

  const $root = document.querySelector("#root");
  //limpiarHTML($root);
  $root.appendChild(divContainer);
}

function limpiarHTML(node) {
  while (node.firstChild) {
    node.remove(node.firstChild);
  }
}
