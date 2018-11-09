<template>
    <div>
      <p>{{a}}</p>
    </div>
</template>

<script>
    export default {
        name: "test",
      props:{
          a:{
            type:Number,
            default:1
          }
      }
    }
</script>

<style scoped>

</style>
