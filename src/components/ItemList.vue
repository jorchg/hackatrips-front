<template>
  <div class="container">
    <b-container fluid>
      <b-row>
        <item
          :data="object"
          v-for="object in objects"
          v-bind:key="JSON.stringify(object)"
        ></item>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Item from '@/components/Item';
import objects from '../assets/mocks/objects.json';

export default {
  name: 'ItemList',
  components: {
    Item,
  },
  props: [

  ],
  data() {
    return {
      locationOptions: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
      objects,
      longitude: 0,
      latitude: 0,
    };
  },
  methods: {
    locationSuccess(pos) {
      this.longitude = pos.coords.longitude;
      this.latitude = pos.coords.latitude;
      this.objects = this.objects.map((object) => {
        object.distance = Math.round(this.getDistanceFromLatLonInKm(
          object.location.coordinates[0],
          object.location.coordinates[1],
          this.latitude,
          this.longitude,
        ));
        return object;
      });
      this.objects.sort((a, b) => {
        return a.distance > b.distance;
      });
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
  created() {
    window
      .navigator
      .geolocation
      .getCurrentPosition(this.locationSuccess, null, this.locationOptions);
  },
};
</script>

<style scoped>
.container {
  padding: 0px;
}
</style>
