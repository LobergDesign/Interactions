
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="scene" ref="scene"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as THREE from "three";
import gsap from "gsap";
// import hoverEffect from "hover-effect";

@Component<Scene>({
  mounted() {
    const el = this.$refs.scene as Element;
    this.camera = new THREE.PerspectiveCamera(
      75,
      el.clientWidth / el.clientHeight,
      0.1,
      1000
    );
    // eslint-disable-next-line no-console
    console.log("Help three",el.clientWidth);
    this.renderer.setSize(el.clientWidth, 1200);
    el.appendChild(this.renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    this.scene.add(cube);
    this.camera.position.z = 5;
    
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }
})

export default class Scene extends Vue {
  @Prop() private msg!: string;
 private camera!: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
  private scene: THREE.Scene = new THREE.Scene();
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {

}
.scene {
  width: 100%;
  height: 100%;
}
canvas{
  height: 100%;
  min-height: 100%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
