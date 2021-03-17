<template>
  <div class="central-content">
    <router-link to="/">
      <button class="anchor-button cursor-pointer">
        <i class="fa fa-angle-left"></i>
      </button>
    </router-link>

    <h1 class="text-center title-text">CLIMA</h1>

    <section class="weather-forcast" v-if="weather">
      <section class="location">
        <div class="city">{{ weather?.name }}, {{ weather?.sys.country }}</div>
        <div class="date">{{ dateBuilder(now) }}</div>
      </section>

      <div class="current">
        <div class="temp">
          {{ Math.round(weather?.main.temp) }}
          <span>&#176;C</span>
        </div>
        <div class="weather">{{ weather?.weather[0]?.main }}</div>
        <div class="hi-low">
          {{ Math.round(weather?.main.temp_min) }} &#176;C /
          {{ Math.round(weather?.main.temp_max) }} &#176;C
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import api from "../api.keys";

export default {
  name: "Forcast",
  props: ["weatherPayload"],
  data() {
    return {
      now: new Date(),
      weather: null,
    };
  },
  created: async function () {
    if (typeof this.weatherPayload === "undefined") {
      this.$router.push({
        name: "Home",
      });
      return;
    }
    // if (this.weatherPayload.includes("latitude")) {
    //   const locationObj = JSON.parse(this.weatherPayload);
    //   const res = await axios.get(
    //     `${this.api.baseUrl}find?lat=${locationObj.latitude}&lon=${locationObj.longitude}&units=metric&APPID=${this.api.key}`
    //   );
    //   const refinedPayload = res.data;
    //   console.log(refinedPayload);
    // }
    //String location
    const res = await axios.get(
      `${api.baseUrl}weather?q=${this.weatherPayload}&units=metric&APPID=${api.key}`
    );
    if (res?.data) {
      const refinedPayload = res.data;
      this.weather = refinedPayload;
    }
  },
  methods: {
    dateBuilder(d) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "November",
        "December",
      ];

      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const day = days[d.getDay()];
      const date = d.getDate();
      const month = months[d.getMonth()];
      const year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
