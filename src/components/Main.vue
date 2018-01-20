<template>
  <div>
    <category-bar></category-bar>
    <item-list :latitude="latitude" :longitude="longitude"></item-list>
  </div>
</template>

<script>
import CategoryBar from '@/components/CategoryBar';
import ItemList from '@/components/ItemList';

export default {
  name: 'Main',
  components: {
    CategoryBar,
    ItemList,
  },
  data() {
    return {
      locationOptions: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
    };
  },
  methods: {
    locationSuccess(pos) {
      this.longitude = pos.coords.longitude;
      this.latitude = pos.coords.latitude;
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

</style>
