<template>
  <div>
    <category-bar></category-bar>
    <item-list></item-list>
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
};
</script>

<style scoped>

</style>
