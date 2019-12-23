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
    }
    private tabs = () => {

        this.tabOptionsArray.forEach(tab => {

            tab.addEventListener('click', () => {
                // get attr from clicked element
                const getTabAttr = tab.getAttribute('data-tab-option');
                // get the matching content id
                const tabContent = this.tabContentList.querySelector("#" + getTabAttr);

                // remove is-selected class from all tab options
                this.tabOptionsArray.forEach(tabItem => tabItem.classList.remove(this.selectedClass));

                // remove is-active class from all content sections
                this.tabContentArray.forEach(contentItem => contentItem.classList.remove(this.activeClass));

                // add is-selected
                tab.classList.add(this.selectedClass);

                  // add is-active
                tabContent.classList.add(this.activeClass);
            })
        })
    }
}