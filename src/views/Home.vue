<template>
  <div class="home">
    <HelloWorld msg="ThreeJs hover"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { gsap } from "gsap";

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
