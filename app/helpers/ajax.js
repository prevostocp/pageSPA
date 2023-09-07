import { json } from "express";

export function ajax(props) {
  let { url, method, header, cbSuccess } = props;

  fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json = cbSuccess(json)))
    .catch((err) => {});
}
