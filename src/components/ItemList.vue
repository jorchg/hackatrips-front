<template>
  <div class="container">
    <item :data="object" v-for="object in objects"></item>
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
  data() {
    return {
      objects,
    };
  },
}
</script>

<style scoped>
.container {
  padding: 0px;
}
</style>
