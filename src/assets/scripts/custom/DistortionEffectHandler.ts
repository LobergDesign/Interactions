// @ts-ignore
import hoverEffect from "hover-effect";
export default class DistortionEffect {
    constructor() {
        this.hoverDistortionEffect();
    }
    private hoverDistortionEffect = () => {
        Array.from(document.querySelectorAll("[data-distortion-effect]")).forEach((el: HTMLElement) => {
            const imgs = Array.from(el.querySelectorAll('img'));
            new hoverEffect({
                parent: el,
                intensity: el.dataset.intensity || undefined,
                speedIn: el.dataset.speedin || undefined,
                speedOut: el.dataset.speedout || undefined,
                easing: el.dataset.easing || undefined,
                hover: el.dataset.hover || undefined,
                image1: imgs[0].getAttribute('src'),
                image2: imgs[1].getAttribute('src'),
                displacementImage: el.dataset.displacementimage,
                width: 500,
            });
            (el as HTMLElement).classList.add("sdfsdf");
        });
    }
}