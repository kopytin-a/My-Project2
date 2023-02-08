<template>
  <ul class="ul">
    <li class="li">
      <router-link 
        to="/Vue3"
        @click="homePage"
        :class="{active: vue}"
      >
        Vue3
      </router-link >
    </li>

    <li class="li">
      <router-link  
        to="/Vuex"
        @click="VeuxPage"
        :class="{active: vuex}" 
      >
        Vuex
      </router-link >
    </li>

     <li class="li">
      <router-link  
        to="/CompositionApi"
        @click="CompositionApiPage"
        :class="{active: compositionApi}" 
      >
        CompositionApi
      </router-link >
    </li>

    <li 
      class="li" 
      style="float: right"
    >
      <router-link 
        style="color: red"
        to='/'
        @click="homePage"
      >
        Выход
      </router-link>
    </li>
</ul>
</template>

<script>
export default {
  data() {
    return {
      vue: true,
      vuex: false,
      compositionApi: false
    }
  },
  mounted() {
    this.vue = JSON.parse(localStorage.vue)
    this.vuex = JSON.parse(localStorage.vuex)
    this.compositionApi = JSON.parse(localStorage.compositionApi)
  },
  methods: {
    homePage() {
      this.vue = true
      this.vuex = false
      this.compositionApi = false
      localStorage.vue = this.vue
      localStorage.vuex = this.vuex
      localStorage.compositionApi = this.compositionApi
    },
    VeuxPage() {
      this.vuex = true
      this.vue = false
      this.compositionApi = false
      localStorage.vuex = this.vuex
      localStorage.vue = this.vue
      localStorage.compositionApi = this.compositionApi
    },
    CompositionApiPage() {
      this.compositionApi = true
      this.vue = false
      this.vuex = false
      localStorage.compositionApi = this.compositionApi
      localStorage.vue = this.vue
      localStorage.vuex = this.vuex
    }
  }
}
</script>

<style scoped>
  .ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  .li {
    float: left;
  }
  .li a {
    display: block;
    color: white;
    padding: 14px 16px;
    text-decoration: none;
  }
  .li a:hover {
    background-color: #000;
  }
  .active {
    background-color: #0cb812;
  }
</style>