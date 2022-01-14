<template>
  <div class="form-group">
    <label for="exampleInputEmail1" class="form-label mt-4">Search Music</label>
    <input type="text" class="form-control" @input="keyPressed" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type Here">
  </div>
</template>

<script>
import axios from 'axios';
export default {
  setup() {

  },
  data(){
    return {
       newSet:[],
    }
  },
  methods:{
    keyPressed(event){
     var userAccessToken = 'BQCnDTAukDDrNVbFp9QUlkSd3h_brmesS6duKdDvN-U42nqV8jf-mPtDBoQshY3yBNsB3ttfTHEqXLNrTHxsbqynr46M1GSAbg0bqJ5BX5e8zMWWzqZYm982E66ADirtwTKSG3YCVfpFyGYHGpCWfUmktZ4gShbsdXIVECL8277Hvc2ubMSrEtxf5yPnqLsgGX0'
      var txt = event.target.value;

        const endpoint = "https://api.spotify.com/v1/search";
        const q = txt;
        const type = 'track';

        fetch(`${endpoint}?q=${q}&type=${type}`, {
          method: "GET",
          headers: {
              Authorization: `Bearer ${userAccessToken}`
          }
        })
         .then( function( response ){
                if( response.status != 200 ){
                    throw response.status;
                }else{
                    return response.json();
                }
            }.bind(this))
            .then( function( data ){
                this.newSet = data.tracks.items;
                this.newDataSet = this.newSet
                this.$emit('newDataSet',this.newSet)
                console.log(this.newSet);
            }.bind(this))
            .catch( function( error ){
                this.fetchError = error;
            }.bind(this));

    }
  }
}
</script>

<style scoped>

</style>
