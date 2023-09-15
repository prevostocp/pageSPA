class CrudContext{
    constructor(strategy, data, element){
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }
}

class tableStrategy{

    show(data, element){
        // element.innerHTML = data.reduce((ac, e)=>{
        //     return ac + `<div>
        //         <h2>${e.name}</h2
        //         <h3>${e.country}</h3>              
        //     </div>
        //     <hr>`
        // }, "");
        element.innerHTML = getTableHTML(data, element)
    }
}

class FormStrategy{

    constructor(large) {
        this.large = large
    }
    
    
    show(data, element){
        // element.innerHTML = data.reduce((ac, e)=>{
        //     return ac + `<div>
        //         <h2>${e.name}</h2
        //         <h3>${e.country}</h3>              
        //     </div>
        //     <hr>`
        // }, "");
        element.innerHTML = getFormHTML(data, element, this.large)
    }
   
}

class MainStrategy{

    show(data, element){
        // element.innerHTML = data.reduce((ac, e)=>{
        //     return ac + `<div>
        //         <h2>${e.name}</h2
        //         <h3>${e.country}</h3>              
        //     </div>
        //     <hr>`
        // }, "");
        element.innerHTML = getMainHTML(data, element)
    }
}
