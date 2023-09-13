import api from "../helpers/ic_app.js";
import { ajax } from "../helpers/ajax.js";
import { Coin } from "./Coin.js";
import { FormEntity } from "../components/FormEntity.js";

export function factoryEntity(entity) {
  switch (entity) {
    case "coin":
      const entidad = new Coin();
      entidad.columns = ["Name", "Symbol", "Image"];
      loadEntity(entidad);
      break;
  }
}

function loadEntity(ent) {
  ajax({
    url: ent.getCoins,
    cbSuccess: (elements) => {
      const htmlColumns = generateColumns(ent.columns);
      const htmlBodyTable = generateBody(elements);

      FormEntity({ cols: htmlColumns, body: htmlBodyTable, title: ent.title });
    },
  });
}

function generateColumns(columns) {
  //console.log("colums");

  const html = columns.reduce((ac, element) => {
    return (ac += `
     <th scope="col">${element}</th>
    `);
  }, "");

  //console.log(html);
}

function generateBody(elements) {
  //   elements.forEach((element) => {
  //     // console.log(element);
  //   });

  const html = elements.reduce((ac, element) => {
    return (ac += `
    <tr>
                                       
    <td><div class="m-2">${element.name}</div></td>
    <td><div class="m-2">${element.symbol}</div></td>
    <td><img src="${element.image}" alt="" class="m-2" /></td>                                        
    <td><button class="btn btn-outline-danger m-2">Delete</botton></td>
    <td><button class="btn btn-outline-danger m-2">Edit</botton></td>
</tr>
    `);
  }, "");
}

function renderContainer(html) {
  document.querySelector(".loader").style.display = "none";
  //document.querySelector("#coins").innerHTML = html;
  //console.log(html);
  document.querySelector("#root").innerHTML = html;
}
