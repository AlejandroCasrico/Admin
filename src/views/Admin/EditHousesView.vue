<template>
  <div class="container-fluid">
    <BasicTitle
        title="Añadir Casa"
        subtitle="Formulario de creación de casa"
    ></BasicTitle>
    <div class="row mt-5">
      <div class="col">
        <form class="user">
          <div class="form-group row">
            <div  class="col-sm-6 mb-3 mb-sm-0">
              
              <input type="text" class="form-control form-control-user" id="houseTitle"
                     placeholder="Name">
            </div>
            <div  class="col-sm-6">
              <input type="text" class="form-control form-control-user" id="exampleLastName"
                     placeholder="type">
            </div>
            <div class="col-sm-6 mb-3 mb-sm-0">
              <input type="text" class="form-control form-control-user" id="restrooms"
                     placeholder="restroms">
            </div>
            <div class="col-sm-6">
              <input type="text" class="form-control form-control-user" id="bedroom"
                     placeholder="bedroom">
            </div>
            <div class="col-sm-6">
              <input type="text" class="form-control form-control-user" id="direction"
                     placeholder="direction">
            </div>
            <div class="col-sm-6 mb-3 mb-sm-0">
              <input type="text" class="form-control form-control-user" id="state"
                     placeholder="state">
            </div>
            <div class="col-sm-6">
              <input type="text" class="form-control form-control-user" id="meters"
                     placeholder="meters">
            </div>
            <div class="col-sm-6 mb-3 mb-sm-0">
              <input type="text" class="form-control form-control-user" id="price"
                     placeholder="pets">
            </div>
            <div class="col-sm-6">
              <input type="text" class="form-control form-control-user" id="location"
                     placeholder="location">
            </div>
            <div class="col-sm-6">
              <input type="text" class="form-control form-control-user" id="children"
                     placeholder="children">
            </div>
          </div>
          <div class="form-group">
            <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                   placeholder="description">
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
import axios from "axios";
export default {
  name: "EditHousesView",
  components: {
    BasicTitle
  },
  data(){
    return{
   result:null
    }
  },
  methods:{
    async getAllHouses(){
      const result = await axios.get("http://localhost:3000/houses");

      this.result = result.data;
    }
}
}
</script>

<style scoped>

</style>
