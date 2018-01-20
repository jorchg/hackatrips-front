<template>
  <div class="container">
    <b-container fluid>
      <b-row>
        <item
          :longitude="longitude"
          :latitude="latitude"
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
    'longitude',
    'latitude',
  ],
  data() {
    return {
      objects,
    };
  },
};
</script>

<style scoped>
.container {
  padding: 0px;
}
</style>
