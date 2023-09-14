export function FormEntity(props) {
  
  return `
      <div class="container-fluid">
        <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
          <div class="col-12 col-sm-8 col-md-6 col-lg-8 col-xl-${props.withForms}">
            <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <a href="index.html" class="">
                    <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Invest-Crypto</h3>
                </a>
                <button class="btn btn-success" id="btnNew-${props.entity}">New ${props.entity}</button>
              </div>
              <div class="col-sm-12 col-xl-8">
              <div class="bg-secondary rounded h-100 p-4">
                  <h5 class="mb-4">${props.title}</h5>
                  <table class="table table-hover table-responsive">
                      <thead>
                          <tr> ${props.cols}
                              <th scope="col"></th>
                              <th scope="col"></th>
                          </tr>
                      </thead>
                      <tbody>
                            ${props.body}
                              </tbody>
                              </table>
                              </div>
                              </div>
                        </div>
                      </div>
                    </div>
                </div>
      `;
}
