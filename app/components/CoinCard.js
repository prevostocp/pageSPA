export function CoinCard(props) {
  const { name, symbol, image } = props;

  return `

  
              <tr>
                                       
                                        <td><div class="m-2">${name}</div></td>
                                        <td><div class="m-2">${symbol}</div></td>
                                        <td><img src="${image}" alt="" class="m-2" /></td>                                        
                                        <td><button class="btn btn-outline-danger m-2">Delete</botton></td>
                                        <td><button class="btn btn-outline-danger m-2">Edit</botton></td>
                                    </tr>

 `;
}
