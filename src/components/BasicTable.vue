<template>
  <div class="card shadow mb-4">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
          <thead>
          <tr>
            <th v-for="title in titles" :key="title">{{ title }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="object in objects" :key="object.id">
            <td v-for="data in object" :key="data">
              {{data}}
            </td>
            <td>
              <div class="dropdown">
                <i class="fas fa-ellipsis-h  dropdown-toggle" data-toggle="dropdown"></i>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"><i class="fas fa-trash-alt"></i> Eliminar</a>
                  <a class="dropdown-item" href="#"><i class="fas fa-pen"></i> Editar</a>
                  
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicTable",
  props: {
    titles: {
      type: [String]
    },
    objects: {
      type: [Object]
    }
  }
}
</script>

<style scoped>

</style>
