import api from "../helpers/ic_app.js";

export class Entity {
  constructor(title, name, withForms = 6) {
    this.title = title;
    this.columns = [];
    this.getCoins = api.COINS;
    this.getEntities = "";
    this.entityName = name;
    this.widthForms = withForms;

    if (Entity.instance && Entity.id === name) {
      return this;
    }

    Entity.instance = this;
    Entity.id = name;
  }

  setWithForms(withForms) {
    this.widthForms = withForms;
  }

  setEntities(url) {
    this.getEntities = url;
  }
}
