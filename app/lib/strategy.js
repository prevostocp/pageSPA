import { getFormHTML, formNewEntity } from "./UIEntities.js";
import { FormAddEditEmtity } from "../components/FormAddEditEntity.js";
import { createInterfaceForm, saveNewEntity } from "./entitiesObj.js";

export class CrudContext {
  constructor(strategy, data, element) {
    this.props = {
      data: "",
      strategy: "",
      element: "",
      columns: "",
      title: "",
      entity: "",
      values: []
    };
  }

  setProps(props) {
    this.props = { ...props };
  }

  show() {
    this.props.strategy.show(this.props);
  }
}

export class TableStrategy {
  show(props) {
    props.element.appendChild(getFormHTML(props));
    const $btnNew = document.querySelector(`#btnNew-${props.entity}`);
    $btnNew.addEventListener("click", () => {
      createInterfaceForm(props);
    });

    //const $btnEdit = document.querySelector(`.btnEdit`);
    // $btnEdit.addEventListener("click", (e) => {
    //   console.log("Modificando", e.target.id);
    // })
  }
}

export class FormStrategy {
  constructor(large) {
    this.large = large;
  }

  show(props) {
    props.element.innerHTML = FormAddEditEmtity(formNewEntity(props).innerHTML);
    const $btnSave = document.querySelector(`#btnSave${props.name}`);
    $btnSave.addEventListener("click", () => {
      const $elements = document.querySelectorAll(".element");
      //console.log(props, "props");
      const aElements = Array.from($elements);
      //console.log(aElements);
      aElements.forEach((e) => {
        //props.columns[e.name] = e.value;
        //props.columns[0][e.name] = e.value;
        props.values[e.name.toLowerCase()] = e.value;
       
        console.log(props.values[e.name.toLowerCase()], "llave");
        //console.log(e.name.toLowerCase(), "llave");
       
      });

      saveNewEntity(props);
    });
  }
}

class MainStrategy {
  show(data, element) {
    // element.innerHTML = data.reduce((ac, e)=>{
    //     return ac + `<div>
    //         <h2>${e.name}</h2
    //         <h3>${e.country}</h3>
    //     </div>
    //     <hr>`
    // }, "");
    element.innerHTML = getMainHTML(data, element);
  }
}
