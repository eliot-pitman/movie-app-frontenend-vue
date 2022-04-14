<script>
import axios from "axios";

export default {
  data: function () {
    return { actor: {} };
  },
  created: function () {
    axios.get("/actors/" + this.$route.params.id + ".json").then((response) => {
      this.actor = response.data;
      console.log("show actor", response.data);
    });
  },
};
</script>

<template>
  <div>
    <h1>First name: {{ actor.first_name }}</h1>
    <h1>Last Name: {{ actor.last_name }}</h1>
    <h2>Known for: {{ actor.known_for }}</h2>
    <h3>Gender: {{ actor.gender }}</h3>
    <h3>Age: {{ actor.age }}</h3>
    <h3>Played In: {{ actor.movie.title }}</h3>
    <a :href="`/movie/${actor.movie.id}`"><button>Learn More About This Movie</button></a>
  </div>
</template>
