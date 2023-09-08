import { Title } from "./Title.js";

export function Header() {
  const $header = document.createElement("header");
  const $divContainer = document.createElement("div");
  $divContainer.classList.add(
    "container-fluid",
    "position-relative",
    "d-flex",
    "p-0"
  );
  $divContainer.appendChild(Title());
  $header.appendChild($divContainer);

  return $header;
}
