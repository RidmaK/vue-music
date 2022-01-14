<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item active">
         <router-link to="/" style="text-decoration: none;"><a class="nav-link" >Home</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" style="text-decoration: none;"><a class="nav-link">About</a></router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <div class="d-flex justify-content-lg-end">
        <ul  class="navbar-nav me-auto">
          <li class="nav-item">
          <a class="nav-link" href="#">GITHUB</a>
        </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  setup() {

  },
}
</script>

<style scoped>

</style>
