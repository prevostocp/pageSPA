import api from "../helpers/ic_app.js";

export class Coin {
    constructor(title) {
        this.title = title;
        this.columns = [];
        this.getCoins = api.COINS;

        if(Coin.instance) {
            return this;
        }

        Coin.instance = this;
    }
}