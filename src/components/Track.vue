<template>
  <div class="container">
    <div class="card">
      <div class="row">
        <div class="col-md-4"><img :src="trackData.album.images[1].url" alt="" srcset=""></div>
        <div class="col-md-8">
          <h2 class="mt-3"> <span>{{ trackData.name }}</span></h2>
          <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>

          <span>{{ trackData.artists[0].name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      trackData:[]
    }
  },
 created: function () {

   axios.get("https://api.spotify.com/v1/tracks/"+this.$route.params.id)
    .then(response=>{
      this.trackData = response.data;
      console.log(this.trackData);
    })
    .catch(e=>{
      this.error.push(e)
    });

 }
}
</script>
<style scoped>
.checked {
  color: orange;
}
</style>
