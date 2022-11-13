<template>
  <div class="container-fluid">

      <!-- Page Heading -->
      <BasicTitle
        title="Houses"
        subtitle="Listado de casas en la plataforma."
      >
        <router-link
            :to="{ name: 'addHouse'}"
            class="btn btn-success btn-icon-split float-right">
          <span class="icon text-white-50">
              <i class="fas fa-plus"></i>
          </span>
          <span class="text">Agregar Casa</span>
        </router-link>
        <router-link
        :to="{ name: 'editingHouse'}"
        class="btn btn-success btn-icon-split float-right">
      <span class="icon text-white-50">
          <i class="fas fa-plus"></i>
      </span>
      <span class="text">Editar Casa</span>
    </router-link>
      </BasicTitle>

      <BasicTable
        :titles="tableTitles"
        :objects="housesArray"
      ></BasicTable>


    </div>
</template>

<script>
import axios from 'axios';
import BasicTable from "@/components/BasicTable";
import BasicTitle from "@/components/BasicTitle";

export default {
  name: "HousesView",
  components: {
    BasicTable,
    BasicTitle
  },
  data() {
    return {
      housesArray: [],
      tableTitles: [
        "ID",
        "Casa",
        "Descripción",
        "Dirección",
        "Estatus",
        "Tipo",
        "Estado",
        "Estatus",
        "Precio",
        "Mascotas",
        "Niños",
       
      ]
    }
  },
  methods: {
    /**
     * Retrieve all houses in database
     */
    async getAllHouses(){
      const result = await axios.get("http://localhost:3000/houses");

      this.housesArray = result.data;
    }
  },
  created() {
    this.getAllHouses();
  }
}
</script>

<style scoped>

</style>
