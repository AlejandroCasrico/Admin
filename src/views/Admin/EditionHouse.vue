<template>
    <div class="container-fluid">
      <BasicTitle
          title="Editar Casa"
          subtitle="Formulario de edicion de casa"
      ></BasicTitle>
  
      <div class="row mt-5">
        <div class="col">
          <form class="user">
            <div class="form-group row">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <input type="text" class="form-control form-control-user" id="houseTitle"
                       placeholder="Title">
              </div>
              <div class="col-sm-6">
                <input type="text" class="form-control form-control-user" id="exampleLastName"
                       placeholder="Last Name">
              </div>
            </div>
            <div class="form-group">
              <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                     placeholder="Email Address">
            </div>
            <div class="form-group row">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <input type="password" class="form-control form-control-user"
                       id="exampleInputPassword" placeholder="Password">
              </div>
              <div class="col-sm-6">
                <input type="password" class="form-control form-control-user"
                       id="exampleRepeatPassword" placeholder="Repeat Password">
              </div>
            </div>
            <a href="#" class="btn btn-primary btn-user btn-block">
              Save House
            </a>
          </form>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  import BasicTitle from "@/components/BasicTitle";
  
  export default {
    name: "EditHousesView",
    components: {
      BasicTitle
    }
  }
  </script>
  
  <style scoped>
  
  </style>