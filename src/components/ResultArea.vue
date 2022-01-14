<template>
<div class="row mt-4 ml-2">

     <div class="card col-md-3"  v-for="items in resultList">
        <center>
          <div  style="margin-left:20px">
                  <img :src="items.album.images[0].url" class="mt-3 mb-3" alt="" srcset="" style="width:100%;">
      </div>
      <div style="height:200px;">
        <h4 class="mt-3">{{ items.name }}</h4>
        <p>{{ items.artists[0].name }}</p>
        <p>{{items.album.name }}</p>


      </div>
      <span class="buttons mb-1" >
        <router-link :to="{ name:'track' , params:{ id:items.id}}"><button class="btn btn-sm btn-dark mb-2" style="width:100%">Show More</button></router-link>
      </span>
        </center>
     </div>
</div>
</template>

<script>
export default {
  props:['resultList']
}
</script>

<style scoped>

</style>
