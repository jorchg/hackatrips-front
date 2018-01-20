<template>
  <div>
    <b-card
      :title="data.name"
      :img-src="data.image"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2">
      <p class="card-text">
        {{ data.description }}
      </p>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: [
    'data',
  ],
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
</style>
