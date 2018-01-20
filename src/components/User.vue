<template>
  <div class="container">
    <b-card
      :title="userData.username"
      :img-src="userData.image"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-1">
      <p class="card-text">
        {{ userData.description }}
      </p>
      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'User',
  data() {
    return {
      userData: {},
    };
  },
  async created() {
    this.userData = await axios.get('http://localhost:8000/users/5a6375a86d1257161e71e3a2')
      .then(response => response.data);
  },
};
</script>

<style scoped>

</style>
