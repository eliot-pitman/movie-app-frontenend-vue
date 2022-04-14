<script>
import axios from "axios";

export default {
  data: function () {
    return {
      actors: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/actors.json").then((response) => {
      console.log(response.data);
      this.actors = response.data;
    });
  },
};
</script>

<template>
  <div id="actors-index">
    <div v-for="actor in actors" :key="actor.id">
      <h1>{{ actor.first_name }}</h1>
      <h1>{{ actor.last_name }}</h1>

      <h2>Plays in: {{ actor.movie.title }}</h2>
      <a :href="`/actors/${actor.id}`"><button>more info</button></a>
    </div>
  </div>
</template>
