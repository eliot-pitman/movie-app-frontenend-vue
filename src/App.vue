<script>
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<template>
  <nav>
    <span>
      <router-link to="/">All Movies</router-link>
    </span>

    <span v-if="isLoggedIn">
      |
      <router-link to="/movie">Add A Movie</router-link>
    </span>

    <span>
      |
      <router-link to="/actors">All Actors</router-link>
    </span>

    <span v-if="!isLoggedIn">
      |
      <router-link to="/SignUp">SignUp</router-link>
    </span>

    <span v-if="!isLoggedIn">
      |
      <router-link to="/LogIn">LogIn</router-link>
    </span>
    <span v-if="isLoggedIn">
      |
      <router-link to="/LogOut">LogOut</router-link>
    </span>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
