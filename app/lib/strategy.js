import { getFormHTML, formNewEntity } from "./UIEntities.js";
import { FormAddEditEmtity } from "../components/FormAddEditEntity.js";
import { createInterfaceForm, saveNewEntity } from "./entitiesObj.js";
import { Validate } from "../helpers/functions.js"

export class CrudContext {
  constructor(strategy, data, element) {
    // this.props = {
    //   data: "",
    //   strategy: "",
    //   element: "",
    //   columns: "",
    //   title: "",
    //   entity: "",
    //   values: [],
    //   addUrl: "",
    //   objEntity: null,
    // };

    this.props = {
      objEntity: null,
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
    const { objEntity } = props;

    //props.element.appendChild(getFormHTML(props));

    objEntity.elements.root.appendChild(getFormHTML(objEntity));

    const $btnNew = document.querySelector(`#btnNew-${objEntity.entity}`);

    $btnNew.addEventListener("click", () => {
      objEntity.method = "POST";
      createInterfaceForm(objEntity);
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
    const { objEntity } = props;

    objEntity.elements.root.innerHTML = FormAddEditEmtity(
      formNewEntity(objEntity).innerHTML
    );
    const $btnSave = document.querySelector(`#btnSave${objEntity.name}`);
    $btnSave.addEventListener("click", () => {
      const $elements = document.querySelectorAll(".element");

      const aElements = Array.from($elements);

      aElements.forEach((e) => {
        objEntity.values[e.name.toLowerCase()] = e.value;
      });

      if(!Validate(objEntity.values)) {
        console.log("todos los campos son obligatorios")
        return;
      }

      saveNewEntity(objEntity);
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
