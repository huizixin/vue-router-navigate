<template>
  <div id="app">
    <h1>APP</h1>

    <keep-alive :include="$store.getters.keepArr">
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
    }
  },
  created(){
  }
}
</script>


