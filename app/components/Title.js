import api from "../helpers/ic_app.js";

export function Title() {
  const $h1 = document.createElement("h1");
  $h1.classList.add("text-center", "text-white", "fs-3")
  $h1.innerHTML = ` hola
        <a href="${api.DOMAIN}" >
            ${api.NAME.toUpperCase()}
        </a>
    `;

  return $h1;
}
