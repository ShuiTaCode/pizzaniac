<template>
<div class="p-card">
  <Card>
    <template #footer>
      <Button class="p-button-text p-button-icon" icon="pi pi-refresh" @click="refreshRecipe"></Button>
    </template>
    <template #content>
      <div class="p-d-flex p-flex-column">
        <RecipeRow @change="handleChange($event)" :ingredient="ingredient" :key="ingredient.key" v-for="ingredient in recipe"></RecipeRow>
      </div>
    </template>
  </Card>
</div>
</template>

<script>

import RecipeRow from "@/components/RecipeRow";
export default {
  name: "IngredientsView",
  components: {RecipeRow},
  data(){
    return{
      recipe:[
        {
          label:'Mehl',
          value:280,
          key:'FLOUR',
          unit:'g'
        },
        {
          label:'Grieß',
          value:70,
          key:'SEMOLINA',
          unit:'g'
        },
        {
          label:'Salz',
          value:8,
          key:'SALT',
          unit:'g'
        },
        {
          label:'Hefe',
          value:7,
          key:'YEAST',
          unit:'g'
        },
        {
          label:'Zucker',
          value:11,
          key:'SUGAR',
          unit:'g'
        },
        {
          label:'Wasser',
          value:217,
          key:'WATER',
          unit:'g/ml'
        },
        {
          label:'Olivenöl',
          value:1,
          key:'OIL',
          unit:'EL'
        },
        {
          label:'Pizza(s)',
          value:3,
          key:'PIZZA',
          unit:'Stück'
        }
      ]
    }
  },
  methods:{
    handleChange(event){
      let changedIngredient = this.recipe.find((ele)=>{return ele.key===event.key})
      let oldValue = changedIngredient.value
      let newValue = event.value
      let rate = newValue/oldValue
      for(let ingredient of this.recipe){
        ingredient.value = ingredient.value*rate
      }
      changedIngredient.value=newValue
    },
    refreshRecipe(){
      this.recipe=[
        {
          label:'Mehl',
          value:280,
          key:'FLOUR',
          unit:'g'
        },
        {
          label:'Grieß',
          value:70,
          key:'SEMOLINA',
          unit:'g'
        },
        {
          label:'Salz',
          value:8,
          key:'SALT',
          unit:'g'
        },
        {
          label:'Hefe',
          value:7,
          key:'YEAST',
          unit:'g'
        },
        {
          label:'Zucker',
          value:11,
          key:'SUGAR',
          unit:'g'
        },
        {
          label:'Wasser',
          value:217,
          key:'WATER',
          unit:'g/ml'
        },
        {
          label:'Olivenöl',
          value:1,
          key:'OIL',
          unit:'EL'
        },
        {
          label:'Pizza(s)',
          value:3,
          key:'PIZZA',
          unit:'Stück'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>