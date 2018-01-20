<template>
  <div>
    <item-with-history
      :data="object"
      :noDistance="true"
    ></item-with-history>
  </div>
</template>

<script>
import axios from 'axios';
import ItemWithHistory from '@/components/ItemWithHistory';

export default {
  name: 'Object',
  data() {
    return {
      object: {},
    };
  },
  components: {
    ItemWithHistory,
  },
  props: [
  ],
  async created() {
    this.object = await axios.get('http://localhost:8000/objects/' + this.$route.params.id)
      .then(response => response.data);
  },
};
</script>

<style scoped>

</style>
