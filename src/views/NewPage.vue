<template>
  <div class="new-page" data-content>
    <div class="wrap">
      <div class="container">
        <h1>{{ msg }}</h1>
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="tab">
          <ul class="tab__options">
            <li data-tab-option="first">First</li>
            <li data-tab-option="second">Second</li>
            <li data-tab-option="third">Third</li>
          </ul>
          <div class="tab__content" data-tab-content-list>
            <section data-tab-content id="first">
              <h2>First</h2>
            </section>
            <section data-tab-content id="second">
              <h2>second</h2>
            </section>
            <section data-tab-content id="third">
              <h2>third</h2>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import "@/assets/styles/components/_tabs.scss";
import { Vue, Component } from "vue-property-decorator";
import Tabs from "@/assets/scripts/custom/TabsHandler";

@Component
export default class NewPage extends Vue {
  private msg: string = "New page";

  mounted() {
    const init = new Tabs();
    return init;
  }
}
</script>
