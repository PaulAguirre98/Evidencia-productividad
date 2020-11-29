<template>
  <div id="app">
    <div class="router-view">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.min.css';
@import '~bootstrap-vue/dist/bootstrap-vue.css';
@import "./assets/sass/main.scss";
</style>