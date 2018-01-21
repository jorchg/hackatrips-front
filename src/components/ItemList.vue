<template>
  <div>
    <pulse-loader :loading="loading"></pulse-loader>
    <div class="container">
      <b-container fluid>
        <b-row>
          <item
            :data="object"
            :index="index"
            v-for="(object, index) in objects"
            v-bind:key="JSON.stringify(object)"
          ></item>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import Item from '@/components/Item';
import axios from 'axios';

export default {
  name: 'ItemList',
  components: {
    Item,
    PulseLoader,
  },
  props: [

  ],
  data() {
    return {
      loading: true,
      size: '100%',
      color: '',
      locationOptions: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
      objects: [],
      loadingObjects: [],
      longitude: 0,
      latitude: 0,
    };
  },
  methods: {
    locationSuccess(pos) {
      this.longitude = pos.coords.longitude;
      this.latitude = pos.coords.latitude;
      this.loadingObjects = this.loadingObjects.map((object) => {
        object.distance = Math.round(this.getDistanceFromLatLonInKm(
          object.location[0].coordinates[0],
          object.location[0].coordinates[1],
          this.latitude,
          this.longitude,
        ));
        return object;
      });
      this.loadingObjects.sort((a, b) => {
        return a.distance > b.distance;
      });
      this.objects = this.loadingObjects;
      this.loading = false;
    },
    locationFail() {
      console.log('Failed location');
      this.longitude = -3.721704654052;
      this.latitude = 40.475744000324;
      this.loadingObjects = this.loadingObjects.map((object) => {
        object.distance = Math.round(this.getDistanceFromLatLonInKm(
          object.location[0].coordinates[0],
          object.location[0].coordinates[1],
          this.latitude,
          this.longitude,
        ));
        return object;
      });
      this.loadingObjects.sort((a, b) => {
        return a.distance > b.distance;
      });
      this.objects = this.loadingObjects;
      this.loading = false;
    },
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      const R = 6371;
      let dLat = this.deg2rad(lat2 - lat1);
      let dLon = this.deg2rad(lon2 - lon1);
      let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let d = R * c;
      return d;
    },
    deg2rad(deg) {
      return deg * (Math.PI / 180)
    },
  },
  async created() {
    window
      .navigator
      .geolocation
      .getCurrentPosition(this.locationSuccess, this.locationFail, this.locationOptions);

    this.loadingObjects = await axios.get('http://localhost:8000/objects')
      .then(response => response.data)
  },
};
</script>

<style scoped>
.container {
  padding: 0px;
}
.v-spinner {
  height: calc(100vh - 130px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
