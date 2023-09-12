import api from "../helpers/ic_app.js";
import { ajax } from "../helpers/ajax.js";
import { Coin } from "./Coin.js";
import { FormEntity } from "../components/FormEntity.js";

function factoryEntity(entity) {

    switch (entity) {
        case "coin":
            const entidad = new Coin();
            entidad.columns = ["Name", "Symbol", "Image"];
            loadEntity(entidad)
            break;
    }
}

function loadEntity(ent) {
    ajax({
        url : ent.getCoins,
        cbSuccess: (elements) => {

         const htmlColumns = generateColumns(ent.columns);          
         const htmlBodyTable = generateBody(elements);

         FormEntity({cols: htmlColumns, body: htmlBodyTable, title: ent.title})

        },
      });
}

function generateBody(elements) {
    elements.forEach(element => {
        console.log(element)     
    });
}


module.export = factoryEntity;