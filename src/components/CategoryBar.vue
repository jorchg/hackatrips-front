<template>
  <div class="container">
    <div class="buttons">
      <b-button v-for="category in categories" variant="success">{{ category }}</b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const categories = [
  'deportes',
  'musica',
  'transporte',
  'ropa',
  'accesorios',
  'varios',
];

export default {
  name: 'CategoryBar',
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.categories = categories;
  },
  mounted() {

  },
  updated() {
    
  },
};
</script>

<style scoped>
.container {
  overflow: hidden;
  max-height: 65px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.buttons {
  width: 100%;
  overflow-x: scroll;
  display: flex;
  flex-direction: row nowrap;
}
.btn {
  margin-left: 10px;
}
</style>
