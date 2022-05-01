<template>
  <h3>Pizzaniac</h3>
  <TabView>
    <TabPanel  header="Amount">
     <IngredientsView></IngredientsView>
    </TabPanel>
    <TabPanel header="Price">

    </TabPanel>

  </TabView>
</template>

<script>


import IngredientsView from "@/components/IngredientsView";
export default {
  name: 'App',
  components: {
    IngredientsView

  },
  data(){
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
