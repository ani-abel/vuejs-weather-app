<template>
  <div id="app">
    <main class="main-container">
      <div class="inner-container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  created: function() {
    this.$router.beforeEach((to, from, next) => {
      if (!to.matched.length) {
        next("/");
      } else {
        next();
      }
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap");

:root {
  --box-shadow-xs: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --box-shadow-sm: 0 1px 2px 0 rgba(133, 76, 76, 0.05);
  --box-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --box-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --color-white: #fff;
  --color-black: #000000;
  --color-blue: #2560fb;
  --heading-font-size: "Open Sans", serif;
  --bg-nav-hover: rgba(0, 0, 0, 0.8);
}

* {
  font-family: var(--heading-font-size);
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
}

body {
  background: var(--color-white);
  padding: 0;
  margin: 0;
  font-size: var(--heading-font-size);
  overflow-x: hidden;
  color: var(--color-white);
}

/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--color-white);
  border-radius: 6px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--color-blue);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--color-blue);
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.main-container {
  background: url("./assets/images/bg-image-large.jpg") center center no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

.main-container .inner-container {
  width: 100%;
  height: 100%;
  /* top: 0;
  left: 0; */
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 99;
}

.inner-container .central-content {
  width: 70%;
  margin: 0 auto;
  padding: 20px 10px;
  margin-top: 2%;
}

.inner-container .central-content h1,
.title-text {
  font-family: "Nanum Gothic", sans-serif;
  letter-spacing: 20px;
  font-size: 35px;
  text-shadow: 4px 4px var(--bg-nav-hover);
  margin-bottom: 70px;
}

.display-flex,
.multiple-forcasts {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
}

.multiple-forcasts {
  height: 400px;
  box-sizing: border-box;
  overflow-y: scroll;
}

.forcast-widget {
  width: 50%;
  padding: 15px 10px;
  text-align: center;
  padding-bottom: 30px;
  /* background: red; */
}

input[type="search"] {
  height: 50px;
  width: 300px;
  border-radius: 5px;
  border: none;
  padding: 8px 10px;
  font-size: 14px;
  box-shadow: var(--box-shadow-xl);
  text-transform: uppercase;

  /*  */
  /* -webkit-appearance: none !important;
  -moz-appearance: none !important;
  background-image: url("data:image/svg+xml;utf8,<svg class='icon icon-keyboard_arrow_down' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'/></svg>") !important;
  background-repeat: no-repeat !important;
  background-position-x: 97% !important;
  background-position-y: 15px !important; */
}

.btn {
  background: var(--color-white);
  border: none;
  border-radius: 5px;
  padding: 20px;
  font-size: 18px;
  box-shadow: var(--box-shadow-xl);
}

.btn-primary {
  background: var(--color-blue);
  color: var(--color-white);
}

section {
  flex: 1 1 100%;
  padding: 0 25px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.location .city,
.forcast-widget .city {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 5px;
}

.location .date,
.forcast-widget .date {
  color: #fff;
  font-size: 16px;
}

.current .temp {
  color: #fff;
  font-size: 102px;
  font-weight: 900;
  margin: 30px 0;
  text-shadow: 4px 10px rgba(0, 0, 0, 0.5);
}

.forcast-current .temp {
  font-size: 50px;
  font-weight: 300;
  margin: 15px 0;
  text-shadow: 4px 10px rgba(0, 0, 0, 0.5);
}

.current .temp span {
  font-weight: 500;
}

.current .weather {
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  font-style: italic;
  margin-bottom: 15px;
  text-shadow: 0 3px rgba(0, 0, 0, 0.4);
}

.current .hi-low {
  color: #fff;
  font-weight: 500;
  font-size: 24px;
  text-shadow: 0 3px rgba(0, 0, 0, 0.4);
}

.anchor-button {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  position: fixed;
  z-index: 999;
  border: none;
  background: #1769aa;
  color: var(--color-white);
  box-shadow: 5px 10px rgba(0, 0, 0, 0.4);
  bottom: 20px;
  left: 3%;
}

.cursor-pointer {
  cursor: pointer;
}

.anchor-button i {
  font-size: 20px;
}

.anchor-button a {
  color: var(--color-white);
}

.anchor-button:hover {
  color: #03a9f4;
}

@media (max-width: 992px) {
  .main-container {
    background: url("./assets/images/bg-image-small.jpg") center center
      no-repeat;
    background-size: cover;
  }

  .inner-container .central-content {
    width: 80%;
  }
}

@media (max-width: 768px) {
  .main-container {
    background: url("./assets/images/bg-image-small.jpg") center center
      no-repeat;
    background-size: cover;
  }

  .inner-container .central-content {
    width: 95%;
  }

  .multiple-forcasts {
    flex-direction: row;
  }

  .forcast-widget {
    width: 100%;
    padding: 15px 10px;
    text-align: center;
    padding-bottom: 30px;
  }
}

@media (max-width: 576px) {
  .main-container {
    background: url("./assets/images/bg-image-small.jpg") center center
      no-repeat;
    background-size: cover;
  }

  .inner-container .central-content {
    width: 100%;
  }

  .multiple-forcasts {
    flex-direction: row;
  }

  .forcast-widget {
    width: 100%;
    padding: 15px 10px;
    text-align: center;
    padding-bottom: 30px;
  }
}
</style>
