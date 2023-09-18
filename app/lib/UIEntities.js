import { FormEntity } from "../components/FormEntity.js";

export function getFormHTML(props) {
  const htmlColumns = generateColumns(props.columns);
  const htmlBodyTable = generateBody(props.data);

  return renderContainer(
    FormEntity({
      cols: htmlColumns,
      body: htmlBodyTable,
      title: props.title,
      entity: props.entity,
      withForms: 6, //ent.withForms,
    })
  );
}

export function formNewEntity(props) {
  return generateComponentsForm(props.columns);
}

function generateColumns(columns) {
  const html = columns.reduce((ac, element) => {
    return (ac += `
       <th scope="col">${element.name}</th>
      `);
  }, "");

  return html;
}

function generateComponentsForm(columns) {
  const $divContainerGral = document.createElement("div");

  const $divContainer = document.createElement("div");
  $divContainer.classList.add(
    "bg-secondary",
    "rounded",
    "p-4",
    "p-sm-5",
    "my-4",
    "mx-3"
  );

  const $divHeader = document.createElement("div");
  $divHeader.classList.add(
    "d-flex",
    "align-items-center",
    "justify-content-between",
    "mb-3"
  );

  const $aHeader = document.createElement("a");
  $aHeader.href = "index.html";

  const $h3HeaderLink = document.createElement("h3");
  $h3HeaderLink.classList.add("text-primary");
  $h3HeaderLink.innerText = "Invest-Crypto";

  const iHeader = document.createElement("i");
  iHeader.classList.add("fa", "fa-user-edit", "me-2");

  $h3HeaderLink.appendChild(iHeader);
  $aHeader.appendChild($h3HeaderLink);

  const $h3Title = document.createElement("h3");
  $h3Title.innerText = "Add New";

  $h3HeaderLink.appendChild($h3Title);

  $divContainer.appendChild($divHeader);

  columns.forEach((element) => {
    const { name, type, control, title } = element;

    const $divElement = document.createElement("div");
    $divElement.classList.add("form-floating", "mb-3");

    const $elem = document.createElement(control);
    if (element.control === "input") {
      $elem.type = type;
    }
    $elem.classList.add("form-control");
    $elem.id = name;

    const $label = document.createElement("label");
    //$label.for = $elem.id;
    $label.setAttribute("for", $elem.id);
    $label.innerText = name;

    console.log($label, "label");

    $divElement.appendChild($elem);
    $divElement.appendChild($label);
    $divContainer.appendChild($divElement);
  });

  const $btnSave = document.createElement("button");
  $btnSave.classList.add("btn", "btn-success", "py-3", "mb-4");
  $btnSave.type = "submit";
  $btnSave.innerText = "Save";

  const $btnCancel = document.createElement("button");
  $btnCancel.classList.add("btn", "btn-danger", "py-3", "mb-4");
  $btnCancel.type = "submit";
  $btnCancel.innerText = "Cancel";

  $divContainer.appendChild($btnSave);
  $divContainer.appendChild($btnCancel);
  console.log($divContainer, "$divcontainer");

  $divContainerGral.appendChild($divContainer);

  return $divContainerGral;
}

function generateBody(elements) {
  try {
    const html = elements.reduce((ac, element) => {
      const { coin_id, name, symbol, image } = element;

      return (ac += `
        <tr>

        <td><div class="m-2">${name}</div></td>
        <td><div class="m-2">${symbol}</div></td>
        <td><img src="${image}" alt="" class="m-2" /></td>
        <td><button class="btn btn-outline-danger m-2" id="btnDelete-${coin_id}" >Delete</botton></td>
        <td><button class="btn btn-outline-danger m-2" id="btnEdit-${coin_id}">Edit</botton></td>
        </tr>
        `);
    }, "");

    return html;
  } catch (error) {
    return error;
  }
}

function renderContainer(html) {
  //document.querySelector(".loader").style.display = "none";

  const divContainer = document.createElement("div");
  divContainer.innerHTML = html;

  //const $root = document.querySelector("#root");
  //limpiarHTML($root);
  //$root.appendChild(divContainer);
  return divContainer;
}
