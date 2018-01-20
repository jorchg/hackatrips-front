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
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'Item',
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
</style>
