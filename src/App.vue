<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <main class="main-wrap">
   <router-view/>
    </main>
  </div>
</template>
<script>
import "@/assets/styles/base/_global.scss";
export default {
  
}
</script>

