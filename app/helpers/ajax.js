// export function ajax(props) {
//   let { url, options, cbSuccess } = props;

//   fetch(url, options)
//     .then((res) => (res.ok ? res.json() : Promise.reject(res)))
//     .then((json) => {
//       cbSuccess(json);
//     })
//     .catch((err) => {
//       let message = err.statusText || "Error al consulta la API";
//       if (err.statusText) {
//         document.querySelector("#root").innerHTML = `
//         <div class="error" >
//           <p>Error ${err.status} : ${message} </p>
//         </div>
//       `;
//       }

//       //document.querySelector(".loader").style.display = "none";
//     });
// }

export const ajax = async (props) => {
  let { url, options, cbSuccess } = props;

  await fetch(url, options)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      cbSuccess(json);
    })
    .catch((err) => {
      let message = err.statusText || "Error al consulta la API";
      if (err.statusText) {
        document.querySelector("#root").innerHTML = `
        <div class="error" >
          <p>Error ${err.status} : ${message} </p>
        </div>
      `;
      }

      //document.querySelector(".loader").style.display = "none";
    });
}

export function ajax2(props) {
  let { url, options, cbSuccess } = props;

  fetch(url, options).then((res) => console.log(res, "res"));
}
