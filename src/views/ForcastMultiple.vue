/* eslint-disable vue/comment-directive */
<template>
  <section>
    <router-link to="/">
      <button class="anchor-button cursor-pointer">
        <i class="fa fa-angle-left"></i>
      </button>
    </router-link>

    <h1 class="text-center title-text">CLIMA</h1>
    <main class="multiple-forcasts display-flex" v-if="weather && weather.length > 0">
      <div class="forcast-widget" v-for="wth in weather" v-bind:key="wth.name">
        <div class="city">{{ wth?.name }}, {{ wth?.sys.country }}</div>
        <div class="date">{{ dateBuilder(now) }}</div>
        <div class="forcast-current">
          <div class="temp">
            {{ Math.round(wth?.main.temp) }}
            <span>&#176;C</span>
          </div>
          <div class="weather">{{ wth?.weather[0]?.main }}</div>
          <div class="hi-low">
            {{ Math.round(wth?.main.temp_min) }} &#176;C /
            {{ Math.round(wth?.main.temp_max) }} &#176;C
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import axios from "axios";
import api from "../api.keys";

export default {
  name: "ForcastMultiple",
  props: ["weatherPayload"],
  data() {
    return {
      now: new Date(),
      weather: null,
    };
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
  created: async function () {
    if (typeof this.weatherPayload === "undefined") {
      this.$router.push({
        name: "Home",
      });
      return;
    }
    if (this.weatherPayload) {
      const locationObj = JSON.parse(this.weatherPayload);
      const res = await axios.get(
        `${api.baseUrl}find?lat=${locationObj.latitude}&lon=${locationObj.longitude}&units=metric&APPID=${api.key}`
      );
      this.weather = res.data?.list;
    }
  },
};
</script>
