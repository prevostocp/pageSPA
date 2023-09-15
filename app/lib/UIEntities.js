
function getFormHTML(data, element, largeView) {
    const html = generateColumns(data.columns);
    html += generateBody(data);
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