<template>
  <div>
    <!-- Modal Component -->
    <b-modal :ref="'modal_' + this.$route.params.id" @ok="handleOk" @cancel="$router.go(-1)" id="modal" :title="data.name">
      <div v-if="data.price > this.me.balance">
        <p>
          Lo sentimos, pero este objeto cuesta <span style="font-weight: 600;">{{ data.price }}</span>
          y en tu cuenta sólo tienes <span style="font-weight: 600;">{{ this.me.balance}}</span>
          créditos. Si estás realmente interesado en este objeto puedes
          pagar una pequeña cantidad que irá destinada a la <i>hucha</i>
          de este objeto.
        </p>
      </div>
      <div v-else>
        <p>Estás a punto de tomar prestado
          <span style="font-weight: 600;">{{ data.name }}.</span>
          Por favor, cuídalo, sé respetuoso y devuélvelo para que
          la comunidad siga avanzando. ¡Muchas gracias!
        </p>
      </div>
      <div v-if="(data.price > this.me.balance) && !this.$route.params.bbvacode" slot="modal-footer" class="w-100">
        <b-btn size="sm" style="margin-left: 10px;" class="float-right" variant="secondary" @click="cancelModal">
          Cancelar
        </b-btn>
        <b-btn v-if="bbvacode === ''" size="sm" class="float-right" variant="primary" @click="bbvaPayment">
          Pagar con BBVA
        </b-btn>
        <b-btn v-else size="sm" class="float-right" variant="primary" @click="transferCash">
          Pagar <span style="font-weight: 600;">10€</span>
        </b-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ItemModal',
  data() {
    return {
      data: {},
      me: {},
      bbvacode: '',
      bbvaAuth: 'YXBwLmJidmEudHNzOkEkQERzRkpqUkJAdVJnTiVCUVJnQEQ0TmZ5aW1sSUlWWk9Rd3lEZnFLc08xQnpiTnpHTzdiTlNYUUZhVVlHRlo=',
    };
  },
  methods: {
    handleOk() {
      console.log('OK pressed!');
    },
    bbvaPayment() {
      window.location.href = 'https://connect.bbva.com/sandboxconnect?client_id=app.bbva.tss&response_type=code&redirect_uri=' + window.location.href;
    },
    cancelModal() {
      this.$router.go(-1);
    },
    async transferCash() {
      const accessToken = await axios({
        method: 'POST',
        url: `https://connect.bbva.com/token?grant_type=authorization_code&code=${this.bbvacode}&redirect_uri=${window.location.href.split('?')[0]}`,
        headers: {
          Authorization: `Basic ${this.bbvaAuth}`,
          'Content-Type': 'application/json',
        },
        data: {},
      })
        .then(response => response.data.access_token);

      const simulated = await axios({
        headers: {
          Authorization: `jwt ${accessToken}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        url: 'https://apis.bbva.com/payments-sbx/v1/me/transfer-simulations',
        data: {
          originAccount: {
            id: 'ES0182002000000000500000000332046493XXXXXXXXX',
          },
          remoteAccount: {
            name: 'TSS',
            number: 'ES9301822759590201530659',
            bic: 'BBVAESMM',
          },
          value: {
            amount: '10',
            currency: 'EUR',
          },
          'transferType': 'SEPA',
        	'feePolicy': 'SHARED',
        	'description': `Payment of article ${this.$route.params.id}`,
        },
      })
        .then(response => response.data.data);

      this.bbvacode = '';
    },
  },
  async created() {
    this.me = await axios.get('http://localhost:8000/users/5a6375a86d1257161e71e3a2')
      .then(response => response.data);
    this.data = await axios.get('http://localhost:8000/objects/' + this.$route.params.id)
      .then(response => response.data);

    const modalRef = `modal_${this.$route.params.id}`;
    this.$refs[modalRef].show();

    this.bbvacode = window.location.href.split('?code=')[1] || '';
  },
};
</script>

<style scoped>

</style>
