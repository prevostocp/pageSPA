import { Sidebar } from "./Sidebar.js";

export function Header() {
  const $header = document.createElement("header");
  $header.appendChild(Sidebar());

  return $header;
}
