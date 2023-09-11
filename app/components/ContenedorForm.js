export function ContenedorForm(coins) {
  const $contenedorForm = document.createElement("div");
  $contenedorForm.classList.add("container-fluid");

  //   let html = "";
  //   coins.forEach((coin) => {
  //     html += `
  //     <article class="coin-card">
  //                          <h3>${coin.name}</h3>
  //                          <img src="${coin.image}" alt="" />
  //                          <h3>${coin.symbol}</h3>
  //                      </article>

  //     `;
  //   });
  coins.map((element) => {
    element.name;
  });

  //   coins.foreach((element) => {
  //     console.log(element);
  //   });

  //   $contenedorForm.innerHTML = `
  //         <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
  //         <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
  //         <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
  //             <div class="d-flex align-items-center justify-content-between mb-3">
  //                 <a href="index.html" class="">
  //                     <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Invest-Crypto</h3>
  //                 </a>
  //                 <h3>Coins</h3>
  //             </div>

  //             ${coins.forEach((element) => {
  //               `
  //                         <article class="coin-card">
  //                         <h3>${element.name}</h3>
  //                         <img src="${element.image}" alt="" />
  //                         <h3>${element.symbol}</h3>
  //                     </article>
  //                 `;
  //             })}

  //         </div>
  //         </div>
  //     </div>

  //     `;

  return $contenedorForm;
}
