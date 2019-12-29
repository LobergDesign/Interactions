export default class Tabs {

    private tabOptions: NodeList = document.querySelectorAll("[data-tab-option]");
    private tabOptionsArray: HTMLElement[] = Array.prototype.slice.call(this.tabOptions);
    private tabContentList = document.querySelector('[data-tab-content-list]');
    private tabContentNodelist: NodeList = document.querySelectorAll("[data-tab-content]");
    private tabContentArray: HTMLElement[] = Array.prototype.slice.call(this.tabContentNodelist);
    private activeClass: string = "is-active";
    private selectedClass: string = "is-selected";

    constructor() {
        this.tabs();
        this.activeTabHandler();
        this.tabsResizeHandler();
    
    }
    private tabs = () => {
        this.tabOptionsArray.forEach(tab => {
            tab.addEventListener('click', () => {
                // get attr from clicked element
                const getTabAttr = tab.getAttribute('data-tab-option');
                // get the matching content id
                const tabContent = this.tabContentList.querySelector("#" + getTabAttr);
                let tabContentHeight = tabContent.clientHeight;
                
                // set height of tab based on content
                (this.tabContentList as HTMLElement).style.height = "" + tabContentHeight + "px";

                // remove is-selected class from all tab options and content
                this.tabOptionsArray.forEach(tabItem => tabItem.classList.remove(this.selectedClass));
                this.tabContentArray.forEach(contentItem => contentItem.classList.remove(this.activeClass));

                // add active clases to clicked tab and matching content
                tab.classList.add(this.selectedClass);
                tabContent.classList.add(this.activeClass);
            })
        })
    }
    private activeTabHandler = () => {
        const activeContent = (this.tabContentNodelist[0] as HTMLElement);
        const activeContentHeight = activeContent.clientHeight;

        // set active class to tab option and content
        (this.tabOptions[0] as HTMLElement).classList.add(this.selectedClass);
        activeContent.classList.add(this.activeClass);

        // set height of active content
        (this.tabContentList as HTMLElement).style.height = "" + activeContentHeight + "px";
    }
    private tabsResizeHandler = () => {
        window.addEventListener('resize', () => {
            const currentTabContentSelector = document.querySelector('.tab__content-section.is-active');
            const currentHeight = (currentTabContentSelector as HTMLElement).offsetHeight;
            (this.tabContentList as HTMLElement).style.height = "" + currentHeight + "px";
        });
    }
}