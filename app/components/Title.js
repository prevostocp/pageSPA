import api from "../helpers/ic_app.js";

export function Title() {
  const $h1 = document.createElement("h1");
  $h1.innerHTML = `
        <a href="${api.DOMAIN}" >
            ${api.NAME.toUpperCase()}
        </a>
    `;

  return $h1;
}
