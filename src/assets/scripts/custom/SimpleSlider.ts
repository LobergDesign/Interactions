
export default class SimpleSlider {

    private activityCalendarListWrap: HTMLElement | null = document.querySelector("[data-activity-content-wrap]");
    private activityCalendarItemsList: NodeList = document.querySelectorAll("[data-activity-calendar-item]");
    private prevBtn: HTMLButtonElement | null = document.querySelector("[data-activity-calendar-icon='prev']");
    private currentBtn: HTMLButtonElement | null = document.querySelector("[data-activity-calendar-icon='current']");
    private activeClass: string = "is-active";
    private selectedClass: string = "is-hidden";

    constructor() {
        this.activityCalendarActiveItemHandler();
        this.activityCalendarResizeHandler();
        this.newToggle();
    }
    private activityCalendarActiveItemHandler = () => {
        (this.activityCalendarItemsList[1] as HTMLElement).classList.add(this.activeClass);
        const activeContentHeight = (document.querySelector(".activity-calendar__wrap.is-active") as HTMLElement).clientHeight;
        // set height of active content
        (this.activityCalendarListWrap as HTMLElement).style.height = "" + activeContentHeight + "px";
    }
    private newToggle = () => {

        (this.currentBtn as HTMLButtonElement).classList.add(this.selectedClass);
        // toggle prev
        (this.prevBtn as HTMLButtonElement).addEventListener("click", (e: Event) => {
            const previousContentSibling = (document.querySelector(".activity-calendar__wrap.is-active") as HTMLElement).previousElementSibling;
            // remove is-selected class from all tab options and content
            (document.querySelector(".activity-calendar__wrap.is-active") as HTMLElement).classList.remove(this.activeClass);
            previousContentSibling.classList.add(this.activeClass);
            (e.currentTarget as HTMLButtonElement).classList.add(this.selectedClass);
            (this.currentBtn as HTMLButtonElement).classList.remove(this.selectedClass);
            // get height of element and set it to wrap
            const selectedHeight = (previousContentSibling as HTMLElement).clientHeight;
            (this.activityCalendarListWrap as HTMLElement).style.height = "" + selectedHeight + "px";

        });
        // toggle current
        (this.currentBtn as HTMLButtonElement).addEventListener("click", (e: Event) => {
            const nextElementSibling = (document.querySelector(".activity-calendar__wrap.is-active") as HTMLElement).nextElementSibling;
            // remove is-selected class from all tab options and content
            (document.querySelector(".activity-calendar__wrap.is-active") as HTMLElement).classList.remove(this.activeClass);
            nextElementSibling.classList.add(this.activeClass);
            (e.currentTarget as HTMLButtonElement).classList.add(this.selectedClass);
            (this.prevBtn as HTMLButtonElement).classList.remove(this.selectedClass);
          // get height of element and set it to wrap
            const selectedHeight = (nextElementSibling as HTMLElement).clientHeight;
            (this.activityCalendarListWrap as HTMLElement).style.height = "" + selectedHeight + "px";
        });

    }
    private activityCalendarResizeHandler = () => {
        window.addEventListener("resize", () => {
            const currentHeight = (document.querySelector(".activity-calendar__wrap.is-active") as HTMLElement).offsetHeight;
            (this.activityCalendarListWrap as HTMLElement).style.height = "" + currentHeight + "px";
        });
    }
}



