<template>
  <div class="home">
    <HelloWorld msg="ThreeJs hover" />

    <div class="test-area">
      <h2>Test area</h2>
      <div class="test-dis"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import gsap from "gsap";
import * as THREE from "three";
// @ts-ignore
import hoverEffect from "hover-effect";
@Component({
  components: { HelloWorld }
})
export default class Home extends Vue {
  @Prop() private msg!: string;

  mounted() {
    const test = new hoverEffect({
      parent: document.querySelector(".test-dis"),
      intensity: 0.2,
      image1: "https://picsum.photos/id/1052/3900/3120",
      image2: "https://picsum.photos/id/1049/3900/3120",
      displacementImage: "https://i.loli.net/2019/09/19/BgYpePLsGiCJ8AI.png"
    });
    return test;
  }
}
</script>
<style scoped lang="scss">
.test-dis {
  height: 600px;
  width: 600px;
}
img {
  max-width: 80%;
}
</style>
