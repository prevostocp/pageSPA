import { getFormHTML } from "./UIEntities.js";

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
    props.element.innerHTML = getFormHTML(props);
  }
}

export class FormStrategy {
  constructor(large) {
    this.large = large;
  }

  show(data, element) {
    element.innerHTML = getFormHTML(data, element, this.large);
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
