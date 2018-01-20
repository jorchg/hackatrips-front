<template>
  <div>
    <p>{{ object }}</p>
  </div>
</template>

<script>
import object from '../assets/mocks/object.json';

export default {
  name: 'Object',
  data() {
    return {
      object,
    };
  },
  props: [
    'id',
  ],
};
</script>

<style scoped>

</style>
