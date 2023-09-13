export function FormAddEditEmtity(props) {
    return `
    <div class="container-fluid">
    <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
    <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
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
  </div>  
    `;
}