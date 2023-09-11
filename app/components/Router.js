import api from "../helpers/ic_app.js";
import { ajax } from "../helpers/ajax.js";
import { CoinCard } from "./CoinCard.js";
import { ContenedorForm } from "./ContenedorForm.js";

export function Router() {
  const d = document,
    w = window;
  const { hash } = location;

  console.log(hash);

  if (!hash || hash === "#/") {
    //cargarDatos(url);
    const html = "<h2>Welcome to the INVEST-CRYPTO</h2>";
    cargarMenu()
    renderContainer(html);
  } else if (hash === "#coins") {
    cargarDatos("coins");
  } else if (hash === "#addcoin") {
    crearFormulario("coin");
  }
}

function cargarDatos(url) {
  ajax({
    url: api.COINS,
    cbSuccess: (coins) => {
      let html = `
      <div class="container-fluid">
        <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
          <div class="col-12 col-sm-8 col-md-6 col-lg-8 col-xl-6">
            <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <a href="index.html" class="">
                    <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Invest-Crypto</h3>
                </a>
                <button OnClick="location.href='index.html#addcoin'" class="btn btn-success">New Coin</button>
              </div>

              <div class="col-sm-12 col-xl-8">
              <div class="bg-secondary rounded h-100 p-4">
            
                  <h5 class="mb-4">Coin List</h5>
                  <table class="table table-hover table-responsive">
                      <thead>
                          <tr>
                              
                              <th scope="col">Name</th>
                              <th scope="col">Symbol</th>
                              <th scope="col">Image</th>                          
                              <th scope="col"></th>
                              <th scope="col"></th>
                          </tr>
                      </thead>
                      <tbody>
      
      
      `;

      coins.forEach((coin) => (html += CoinCard(coin)));
      //ContenedorForm(coins);
      ////renderContainer(ContenedorForm(coins));
      html += `
                              </tbody>
                              </table>
                              </div>
                              </div>
      
                        </div>
                      </div>
                    </div>
                </div>


             
      `;
      renderContainer(html);
    },
  });
}

function crearFormulario(entity) {
  let html = `
  
  <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
  <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-5">
      <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
          <div class="d-flex align-items-center justify-content-between mb-3">
              <a href="index.html" class="">
                  <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Invest-Crypto</h3>
              </a>
              <h3>Add New</h3>
          </div>
          <div class="form-floating mb-3">
              <input type="text" class="form-control" id="nameText" >
              <label for="nameText">Name</label>
          </div>
          <div class="form-floating mb-3">
              <input type="text" class="form-control" id="symbolText" placeholder="name@example.com">
              <label for="symbolText">Symbol</label>
          </div>

          <div class="form-floating mb-3">
              <input type="area" class="form-control" id="descriptionText" >
              <label for="descriptionText">Description</label>
          </div>

          <div class="form-floating mb-3">
            <input type="file" class="form-control" id="fileText">
            <label for="fileText">Load</label>
          </div>

          <div class="form-floating mb-3">
              <img />
          </div>
          
          <button type="submit" class="btn btn-success py-3 mb-4">Save</button>
          <button type="submit" class="btn btn-danger py-3 mb-4">Cancel</button>
          
      </div>
  </div>
</div>
  
  
  `;

  renderContainer(html);
}

function cargarMenu() {
  const $menu = document.querySelector("#menu");
  
  const $link1 = document.createElement("a");

  $menu.appendChild($link1);
}

function renderContainer(html) {
  document.querySelector(".loader").style.display = "none";
  //document.querySelector("#coins").innerHTML = html;
  document.querySelector("#root").innerHTML = html;
}
