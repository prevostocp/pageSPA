import { Coins } from "./Coins.js";

export function Content() {
  const $content = document.createElement("div");
  $content.classList.add("content");

  $content.appendChild(Coins());

  return $content;
}
