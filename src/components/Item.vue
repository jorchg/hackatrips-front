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
      <p class="card-text" v-bind:key="Number(latitude)">Distancia: {{ distance }} Km</p>
      <b-button href="#" variant="primary">Go somewhere</b-button>
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
  ],
  data() {
    return {
      distance: 0,
    };
  },
  methods: {
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      const R = 6371; // Radius of the earth in km
      let dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
      let dLon = this.deg2rad(lon2 - lon1);
      let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let d = R * c; // Distance in km
      return d;
    },
    deg2rad(deg) {
      return deg * (Math.PI / 180)
    },
  },
  updated() {
    this.distance = Math.round(this.getDistanceFromLatLonInKm(
      this.latitude,
      this.longitude,
      this.data.location.coordinates[0],
      this.data.location.coordinates[1],
    ));
  },
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
</style>
