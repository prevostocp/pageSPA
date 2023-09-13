import api from "../helpers/ic_app.js";

export class Entity {
    constructor(title, name, withForms = 6) {
        this.title = title;
        this.columns = [];
        this.getCoins = api.COINS;
        this.entityName = name;
        this.widthForms = withForms;

        if(Coin.instance && Coin.id === name) {
            return this;
        }

        Coin.instance = this;
        Coin.id = name;     
    }

    setWithForms(withForms) {
        this.widthForms = withForms;
    }
}