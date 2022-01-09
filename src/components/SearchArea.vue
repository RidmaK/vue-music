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
     var userAccessToken = 'BQANd7zMBFlkEK0BECGjwQRNr1Uvij56c4fNXuUXdTd1EWf4p4p-d9I2M6BNLBRySx-F6HydGHtEHplozWbAUyewG6oXvSqz5DK3t_6VshedUXx8K1X2yDM1MOWxBhumAAc4sI7W1WD7q5hdWo0UeF1CtxpPf9gJIAWULBd-8FOAy4u3'
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
