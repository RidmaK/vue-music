<template>
  <div class="container mt-5">
    <div class="row">
    <form>
      <fieldset>
        <legend>MUSIC STORE</legend>
        <app-searcharea @newDataSet ="result = $event"></app-searcharea>
      </fieldset>
    </form>
    </div>
    <div class="row">
      <app-resultarea :resultList ="result"></app-resultarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
         result:[]
      }
  },
}
</script>

<style scoped>

</style>
