import { ContenedorForm } from "./ContenedorForm.js";

export function Coins(coins) {
  const $coins = document.createElement("section");
  $coins.id = "coins";

  //$coins.innerHTML = ContenedorForm(coins);

  return $coins;
}
