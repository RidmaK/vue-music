<template>
<div class="row">
    <div  v-for="items in resultList" class="row" style="padding-top:2px;">

      <div class="col-md-1"></div>
      <div class="col-md-2 bg-light" style="margin-left:20px">
                  <img :src="items.album.images[0].url" class="mt-3 mb-3" alt="" srcset="" style="width:150px;">
      </div>
      <div class="col-md-8  bg-light">
        <h4 class="mt-3">{{ items.name }}</h4>
        <p>{{ items.artists[0].name }}</p>
        <p>{{items.album.name }}</p>
 <span class="pull-right buttons" style="float:right">
        <button class="btn btn-sm btn-primary"><i class="fa fa-fw fa-eye">Show More </i></button>
      </span>

      </div>
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
