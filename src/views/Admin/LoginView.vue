<template>
  <div class="login" col="12">
    <h1 class="title">Login Admin</h1>
    <form class="form">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">Usuario</label>
        <input v-model="userName" type="text" class="form-control" />

      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">Contraseña</label>
        <input type="password" v-model="userPass" id="form2Example2" class="form-control" />

      </div>

      <!-- 2 column grid layout for inline styling -->
      <div class="row mb-4">

      </div>

      <!-- Submit button -->
      <p v-if="error" class="error">Usuario o contraseña incorrectos.</p>
      <button v-on:click="confirmUser" type="button" class="btn btn-primary btn-block mb-4">Ingresar</button>

      <!-- Register buttons -->
      <div class="text-center">
        <p>¿No tienes cuenta? <router-link to="/newuser">Registrate</router-link></p>
      </div>
    </form>
  </div>
</template>


<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'LoginView',
  data(){
    return {
      userName: "",
      userPass: "",
      error: false
    }
  },
  methods: {
    async confirmUser(){
      try {
        let response = await axios.post('https://silly-hospital-gown-seal.cyclic.app/auth/login',
            {
              userName: this.userName,
              userPass: this.userPass,
            });
        if (response.status == 200 || response.status == 201){
          await this.$router.push("/home");
        }else{
          this.error = true
        }
        console.log(response)
      } catch (e){
        this.error = true
        // alert("Usuario o contraseña incorrectos")
        console.log(e)
      }
    }
  },
  components: {

  },

};
</script>

<style>
.login {
  padding: 1rem;
  background-image: url("");
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: white;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label{
  margin-top: 1rem;
  color: black;
  margin-bottom: 0.5rem;

}
.form-control{
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid black;
  color: black;
}
.error{
    font-size: 1rem;
}



</style>