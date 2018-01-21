<template>
  <div class="container">
    <div class="profile-image">
      <img class="profile" src="../assets/japan-01.jpg" />
    </div>
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
    <div class="credits-container">
      <h4>Mis créditos</h4>
      <div class="credits">
        <h1>{{ userData.balance }}</h1>
        <icon style="margin-left: 15px;" name="credit-card" scale="2"></icon>
      </div>
    </div>
    <div class="history-container">
      <h4>Mi historial</h4>
      <div class="history">
        <item
          :data="object.object_id"
          :noDistance="true"
          v-for="object in userData.history"
          v-bind:key="JSON.stringify(object)"
        ></item>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Item from '@/components/Item';

export default {
  name: 'User',
  components: {
    Item,
  },
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
.container {
  padding-left: 0px;
  padding-right: 0px;
}
.profile-image {
  max-width: 100%;
  width: 100%;
  max-height: 200px;
}
.profile-image::after {
  display: block;
  position: relative;
  background-image: linear-gradient(to bottom, rgba(146, 53, 169, 0.1) 0, rgba(146, 53, 169, 0.6) 100%);
  margin-top: -200px;
  height: 200px;
  width: 100%;
  content: '';
}
.profile {
  object-fit: cover;
  width: 100%;
  height: 200px;
}
article {
  border: 0;
}
.card-img-top {
  border-radius: 50%;
  max-width: 100px;
  margin: 0 auto;
  margin-top: -50px;
  z-index: 10;
}
.credits {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  margin: 0;
}
.credits-container, .history-container {
  border-top: 1px solid #92929240;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
