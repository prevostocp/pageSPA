export function ajax(props) {
  let { url, method, header, cbSuccess } = props;
  console.log(url)
  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || "Error al consulta la API";
      document.querySelector("#root").innerHTML = `
        <div class="error" >
          <p>Error ${err.status} : ${message} </p>
        </div>
      `;
      document.querySelector(".loader").style.display = "none";
    });
}
