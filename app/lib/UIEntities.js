import { FormEntity } from "../components/FormEntity.js";

export function getFormHTML(props) {
  // let html = generateColumns(columns);
  // html += generateBody(data);

  const htmlColumns = generateColumns(props.columns);
  const htmlBodyTable = generateBody(props.data);

  return FormEntity({
    cols: htmlColumns,
    body: htmlBodyTable,
    title: props.title,
    withForms: 6, //ent.withForms,
  });

  //return html;
}

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
