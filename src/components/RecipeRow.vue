<template>
<div class="p-d-flex p-jc-between ">

    <div class="p-d-flex p-flex-column p-jc-center" >

        {{ingredient.label}}

    </div>
  <div style="width:40vw" class="p-d-flex p-m-2 p-jc-between">
    <span class="p-inputnumber p-component p-inputwrapper parent p-inputwrapper-filled p-mr-2" >
      <input type="number" min="1" v-model="computedInput" class="p-inputtext p-component p-inputnumber-input p-inputnumber-input" />
     </span>
    <div class="p-d-flex p-flex-column p-jc-center" >
      {{ingredient.unit}}
    </div>

  </div>


</div>
</template>

<script>
export default {
  name: "RecipeRow",
  props:{
    ingredient:{
      type:Object,
      required:true
    }
  },
  computed:{
    computedInput:{
      get(){
       if (this.ingredient.key === 'PIZZA' || this.ingredient.key === 'OIL') {
         return this.ingredient.value.toFixed(1)
       }else{
         return Math.round(this.ingredient.value)
       }
      },
      set(nv){
        if(nv){
          this.$emit('change',{
            key:this.ingredient.key,
            value:nv
          })
        }
      }
    }
  }
}
</script>

<style scoped>
.parent{
  max-width: 20vw
}
.parent > input {
  width:100% !important;
}
</style>