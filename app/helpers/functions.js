// const Validate = (obj) => {
//   return Object.values(obj).every((input) => input !== "");
// };

// export default {
//   Validate,
// };

export function Validate(obj) {
  return Object.values(obj).every((input) => input !== "");
}

export function viewAlert(mensage) {
  const existeAlert = document.querySelector(".alert");
  if (existeAlert) return;

  const $divAlert = document.createElement("div");
  $divAlert.classList.add("alert", "alert-danger");
  $divAlert.setAttribute("role", "alert");
  $divAlert.textContent = mensage;

  return $divAlert;
}

export function removeAlert() {
  const $divAlert = document.querySelector(".alert");
  setTimeout(() => {
    $divAlert.remove();
  }, 2000);
}
