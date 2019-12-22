<template>
  <div class="home" data-content>
    <div class="container">
    <HelloWorld msg="ThreeJs hover" />
    <h2>Distortion effect</h2>
    <div class="listview">
      <div class="row">
        <div class="col-6">
          <div
            class="listview__item"
            data-distortion-effect
            data-intensity="0.2"
            data-speedIn="1.8"
            data-speedOut="1.4"
            data-displacementimage="https://i.loli.net/2019/09/19/BgYpePLsGiCJ8AI.png"
          >
            <img src="@/assets/images/first.jpg" alt="alt" />
            <img src="@/assets/images/second.jpg" alt="alt" />
          </div>
        </div>
        <div class="col-6">
          <div
            class="listview__item"
            data-distortion-effect
            data-intensity="0.2"
            data-speedIn="2"
            data-speedOut="1.4"
            data-displacementimage="https://i.loli.net/2019/09/19/BgYpePLsGiCJ8AI.png"
          >
            <img src="@/assets/images/test1.jpg" alt="alt" />
            <img src="@/assets/images/test2.jpg" alt="alt" />
          </div>
        </div>
        <div class="col-6">
          <div
            class="listview__item"
            data-distortion-effect
            data-intensity="0.2"
            data-speedIn="1.4"
            data-speedOut="1.4"
            data-displacementimage="https://i.loli.net/2019/09/19/BgYpePLsGiCJ8AI.png"
          >
            <img src="@/assets/images/test1.jpg" alt="alt" />
            <img src="@/assets/images/test2.jpg" alt="alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import "@/assets/styles/components/_listview.scss";
import { Component, Prop, Vue } from "vue-property-decorator";
import DistortionEffect from "@/assets/scripts/custom/DistortionEffectHandler";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: { HelloWorld }
})
export default class Home extends Vue {
  @Prop() private msg!: string;

  mounted() {
    const init = new DistortionEffect();
    return init;
  }
}
</script>

