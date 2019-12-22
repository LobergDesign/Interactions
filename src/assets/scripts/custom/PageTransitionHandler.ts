export default class PageTransition {
    constructor() {
    }
    public beforeEnter = (el: HTMLElement | undefined) => { // before new page enter
            el.style.transform = "translateY(100%)";
            el.style.visibility = "hidden";
    }
    public enter = (el: HTMLElement | undefined) => { // new page enter
        setTimeout(() => {
            el.style.transitionDelay = ".1s";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.visibility = "visible";
        }, 10);
    }
    public leave = (el: HTMLElement | undefined) => { // current page leaves
        el.style.bottom = "0";
            el.style.opacity = "0.5";
            el.style.transform = "translateY(-50%)";
     
    }
}