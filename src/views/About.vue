<template>
  <div class="about" data-content>
    <div class="wrap">
      <section class="container">
        <article class="tile">
          <figure class="tile__figure">
            <img
              src="@/assets/images/test1.jpg"
              data-hover="@/assets/images/test2.jpg"
              class="tile__image"
              alt="My image"
              width="400"
              height="300"
            />
          </figure>
        </article>
      </section>

      <canvas id="stage"></canvas>
      <div class="container">
        <h1>This is an about page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src="@/assets/images/test1.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
 import * as THREE from 'three'
export default {
 

	// constructor() {
	// 	this.container = document.getElementById('stage');

	// 	this.scene = new THREE.Scene()
	// 	this.renderer = new THREE.WebGLRenderer({
	// 		canvas: this.container,
	// 		alpha: true,
	//   })

	// 	this.renderer.setSize(window.innerWidth, window.innerHeight)
	// 	this.renderer.setPixelRatio(window.devicePixelRatio)

	// 	this.initLights()
	// }

	// private initLights = () => {
	// 	const ambientlight = new THREE.AmbientLight(0xffffff, 2)
	// 	this.scene.add(ambientlight)
	// }

}
</script>
