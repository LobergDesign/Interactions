
// @ts-ignore
import hoverEffect from "hover-effect";
export default class DistortionEffect {
    constructor() {
        this.hoverDistortionEffect();
    }
    private hoverDistortionEffect = () => {
      
        Array.from(document.querySelectorAll("[data-distortion-effect]")).forEach((elm: HTMLElement) => {
            const imgs = Array.from(elm.querySelectorAll('img'));
            new hoverEffect({
                parent: elm,
                intensity: elm.dataset.intensity || undefined,
                speedIn: elm.dataset.speedin || undefined,
                speedOut: elm.dataset.speedout || undefined,
                easing: elm.dataset.easing || undefined,
                hover: elm.dataset.hover || undefined,
                image1: imgs[0].getAttribute('src'),
                image2: imgs[1].getAttribute('src'),
                displacementImage: elm.dataset.displacementimage,
                preserveDrawingBuffer: true,
                alpha: true,
            });
        }, false);
    }
}