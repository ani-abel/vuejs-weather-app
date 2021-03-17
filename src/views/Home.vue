<template>
  <div class="central-content">
    <h1 class="text-center">CLIMA</h1>
    <p class="text-center">
      <button type="button" class="btn btn-primary cursor-pointer" v-on:click="getGeolocation">
        <i class="fa fa-map-marker" aria-hidden="true"></i>
        USE MY CURRENT LOCATION
      </button>
    </p>
    <h4 class="text-center">OR</h4>
    <form class="text-center" v-on:submit="onSubmit">
      <input type="search" placeholder="Type in a Location (I.E ENUGU)" id="city-text" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    getGeolocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((data) => {
          const { latitude, longitude } = data.coords;
          const selectedLocation = { latitude, longitude };
          this.$router.push({
            name: "ForcastMultiple",
            params: { weatherPayload: JSON.stringify(selectedLocation) },
          });
        });
      }
    },
    onSubmit(e) {
      e.preventDefault();
      const selectedCity = document.querySelector("#city-text").value;
      this.$router.push({
        name: "Forcast",
        params: { weatherPayload: selectedCity },
      });
    },
  },
};
</script>
