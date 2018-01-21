<template>
  <b-navbar toggleable="xs" type="light" variant="light">
    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="md" class="mr-sm-2" type="text" placeholder="Buscar"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form>
        <b-navbar-nav>
          <b-nav-item to="/perfil">Perfil</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-brand to="/">TTS</b-navbar-brand>
    <div class="credits">
      <span>{{ me.balance }}</span>
      <icon style="margin-left: 5px;" name="credit-card" scale="1"></icon>
    </div>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  </b-navbar>

  <!-- navbar-1.vue -->
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      me: {
        balance: 0,
      },
    };
  },
  async created() {
    this.me = await axios.get('http://localhost:8000/users/5a6375a86d1257161e71e3a2')
      .then(response => response.data);
  },
};
</script>

<style scoped>
form {
  flex-wrap: inherit;
}
input {
  margin-right: 20px;
}
.credits {
  display: flex;
  align-items: center;
  justify-content: center;
  left: 70px;
  position: relative;
}
</style>
