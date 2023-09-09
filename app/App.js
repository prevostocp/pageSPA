import api from "./helpers/ic_app.js";
import { ajax } from "./helpers/ajax.js";
//import { Title } from "./components/Title.js";
import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";

export function App() {
  const d = document;
  const $root = d.querySelector("#root");
  ajax({
    url: api.COINS,
    cbSuccess: (coins) => {
      console.log(coins);
    },
  });
  $root.appendChild(Header());
  $root.appendChild(Loader());
}
