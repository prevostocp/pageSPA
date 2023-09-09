import api from "../helpers/ic_app.js";
import { ajax } from "../helpers/ajax.js";
import { CoinCard } from "./CoinCard.js";

export function Router() {
  const d = document,
    w = window;
  const { hash } = location;

  if (!hash || hash === "#/") {
    //cargarDatos(url);
    const html = "<h2>Welcome to the INVEST-CRYPTO</h2>";
    renderContainer(html);
  } else if (hash === "#coins") {
    cargarDatos("coins");
  }
}

function cargarDatos(url) {
  ajax({
    url: api.COINS,
    cbSuccess: (coins) => {
      let html = "";
      coins.forEach((coin) => (html += CoinCard(coin)));

      renderContainer(html);
    },
  });
}

function renderContainer(html) {
  document.querySelector(".loader").style.display = "none";
  document.querySelector("#coins").innerHTML = html;
}
