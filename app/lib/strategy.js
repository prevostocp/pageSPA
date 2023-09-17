import { getFormHTML, formNewEntity } from "./UIEntities.js";

export class CrudContext {
  constructor(strategy, data, element) {
    // this.setStrategy(strategy);
    // this.data = data;
    // this.element = element;
    // this.columns = "";

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

  //   setStrategy(strategy) {
  //     this.strategy = strategy;
  //   }

  //   setData(data) {
  //     this.data = data;
  //   }

  //   setElement(element) {
  //     this.element = element;
  //   }

  //   setColumns(columns) {
  //     this.columns = columns;
  //   }

  show() {
    this.props.strategy.show(this.props);
  }
}

export class TableStrategy {
  show(props) {
    props.element.appendChild(getFormHTML(props));
    const $btnNew = document.querySelector(`#btnNew-${props.entity}`);
    $btnNew.addEventListener("click", () => {
      formNewEntity(props);
    });
  }
}

export class FormStrategy {
  constructor(large) {
    this.large = large;
  }

  show(data, element) {
    element.appendChild = getFormHTML(data, element, this.large);
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
