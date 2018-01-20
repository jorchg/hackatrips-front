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
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  </b-navbar>

  <!-- navbar-1.vue -->
</template>

<script>

</script>

<style scoped>
form {
  flex-wrap: inherit;
}
input {
  margin-right: 20px;
}
</style>
