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
      aElements.forEach((e) => {
        //props.columns[e.name] = e.value;
        console.log(props.columns[e.name]);
      });

      //saveNewEntity();
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
