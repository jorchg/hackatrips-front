<template>
  <!-- <router-link :to="{ name: 'Object', params: { id: data._id }}"> -->
    <b-col class="col-12 col-sm-12 col-md-4">
      <b-card
        :title="data.name"
        :img-src="data.image"
        img-alt="Image"
        img-top
        tag="article"
        class="mb-1"
      >
        <div class="object-info">
          <span style="font-weight: 600;">{{ data.price }}</span><icon style="margin-left: 5px;" name="credit-card" scale="1"></icon>
        </div>
        <p class="card-text">
          {{ data.description }}
        </p>
        <div v-if="noDistance !== true" class="location">
          <div class="location-text">
            <span><icon style="margin-left: 5px; margin-right: 5px;" name="map-marker" scale="1"></icon>{{ data.location[0].name }}</span><span>{{ data.location[0].poi_name }}</span>
          </div>
          <p class="card-text card-text-bold" v-bind:key="Number(latitude)">Distancia: {{ data.distance }} Km</p>
        </div>
        <div>
          <b-btn v-b-modal="'modal' + this.index" variant="primary">Lo quiero!</b-btn>
          <!-- Modal Component -->
          <b-modal @ok="handleOk" :id="'modal' + this.index" :title="data.name">
            <div v-if="data.price > this.me.balance">
              <h1>NO TIENES PASTUKI!</h1>
            </div>
            <div v-else>
              <p>Estás a punto de tomar prestado
                <span style="font-weight: 600;">{{ data.name }}.</span>
                Por favor, cuídalo, sé respetuoso y devuélvelo para que
                la comunidad siga avanzando. ¡Muchas gracias!
              </p>
            </div>
          </b-modal>
        </div>
        <!-- <b-button href="#" variant="primary">Lo quiero!</b-button> -->
      </b-card>
    </b-col>
  <!-- </router-link> -->
</template>

<script>
import axios from 'axios';

export default {
  name: 'Item',
  props: [
    'data',
    'longitude',
    'latitude',
    'noDistance',
    'index',
  ],
  data() {
    return {
      me: {},
    };
  },
  methods: {
    handleOk() {
      console.log('OK pressed!');
    },
  },
  async created() {
    this.me = await axios.get('http://localhost:8000/users/5a6375a86d1257161e71e3a2')
      .then(response => response.data);
  }
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
.card-text-bold {
  font-weight: 600;
  font-size: 18px;
}
article::after {
  display: block;
  position: absolute;
  background-image: linear-gradient(to bottom, rgba(146, 53, 169, 0.1) 0, rgba(0, 0, 0, 0.5) 100%);
  height: 150px;
  width: 100%;
  content: '';
}
.object-info {
  margin-top: -90px;
  position: absolute;
  color: white;
  z-index: 10;
  text-align: right;
  display: flex;
  align-items: center;
}
.location-text {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
