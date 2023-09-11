import { Coins } from "./Coins.js";
import { Navbar } from "./Navbar.js";

export function Content() {
  const $content = document.createElement("div");
  $content.classList.add("content");

  $content.appendChild(Navbar());
  $content.appendChild(Coins());

  return $content;
}
