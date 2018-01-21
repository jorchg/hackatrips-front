<template>
  <b-col class="col-12 col-sm-12 col-md-4">
    <b-card
      :title="data.name"
      :img-src="data.image"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-1">
      <p class="card-text">
        {{ data.description }}
      </p>
      <p v-if="noDistance !== true" class="card-text card-text-bold" v-bind:key="Number(latitude)">Distancia: {{ data.distance }} Km</p>
      <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
      <h3>Historial</h3>
      <div class="history-container" v-for="history in data.history">
        <div class="user">
          <img class="user-img" :src="history.user_id.image" />
          <span style="font-weight: 600;">@{{ history.username }}</span>
        </div>
        <p style="margin-top: 15px;">{{ history.story }}</p>
      </div>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'ItemWithHistory',
  props: [
    'data',
    'longitude',
    'latitude',
    'noDistance',
  ],
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {
  }
}
</script>

<style scoped>
article {
  border: 0;
}
img {
  max-height: 150px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: 50% 50%;
}
[class^="col-"] {
  padding-left: 0px;
  padding-right: 0px;
}
.card-text-bold {
  font-weight: 600;
  font-size: 18px;
}
.history-container {
  border-top: 1px solid #afafaf66;
  padding-top: 15px;
}
.user-img {
  border-radius: 50%;
  width: 50px;
  margin: 0 auto;
  height: 50px;
}
.user {
  /* text-align: left; */
}
</style>
