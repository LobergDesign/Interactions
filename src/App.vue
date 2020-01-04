<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/newpage">newpage</router-link> |
      <router-link to="/simpleslider">simple slider</router-link>
    </div>

    <main class="main-wrap">
      <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
        <router-view />
      </transition>
    </main>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import PageTransition from "@/assets/scripts/custom/PageTransitionHandler";
import "@/assets/styles/styles.scss";

@Component({
  name: "App"
})
export default class App extends Vue {
  mounted() {
  }
  beforeEnter(el: HTMLElement) {
    const init = new PageTransition();
    return init.beforeEnter(el);
  }
  enter(el: HTMLElement) {
    const init = new PageTransition();
    return init.enter(el);
  }
  leave(el: HTMLElement) {
    const init = new PageTransition();
    return init.leave(el);
  }
}
</script>
