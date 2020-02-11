<template>
  <div class="alert alert-success" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
   {{this.message}}
  </div>
</template>

<script>
export default {
  name: "alert",
  data() {
    return {
    
    };
  },
  props:["message"]
};
</script>

<style>
</style>