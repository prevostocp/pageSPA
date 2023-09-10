import { Content } from "./Content.js";
import { Header } from "./Header.js";

export function Container() {
  const $divContainer = document.createElement("div");
  $divContainer.classList.add(
    "container-fluid",
    "position-relative",
    "d-flex",
    "p-0",
    "bg-info"
  );

  $divContainer.appendChild(Header());
  $divContainer.appendChild(Content());

  return $divContainer;
}
