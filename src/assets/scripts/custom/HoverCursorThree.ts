// @ts-ignore
import * as THREE from 'three'
const perspective = 800;
const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI;

export default class DistortionEffect {
    container = document.getElementById('stage') as HTMLCanvasElement;
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({
        canvas: this.container,
        alpha: true,
  });
  camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 1000);

	constructor() {
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setPixelRatio(window.devicePixelRatio);

        this.initLights();
        this.initCamera();
        this.update();
	}

	private initLights = () => {
		const ambientlight = new THREE.AmbientLight(0xffffff, 2)
		this.scene.add(ambientlight)
    }
    private initCamera = () => {
        this.camera.position.set(0, 0, perspective);
    }
    private update = () =>{
        requestAnimationFrame(this.update.bind(this))
        this.renderer.render(this.scene, this.camera)
    }
}