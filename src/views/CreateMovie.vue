<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newMovieParams: { plot: "" },
    };
  },
  created: function () {},
  methods: {
    createMovie: function () {
      axios.post("http://localhost:3000/movies.json", this.newMovieParams).then((response) => {
        console.log("success", response.data);
        this.movies.push(response.data);
      });
    },
  },
};
</script>

<template>
  <div class="movie-new">
    <form v-on:submit.prevent="createMovie()">
      <h1>make a movie</h1>

      <div>
        <div>
          title:
          <input type="text" v-model="newMovieParams.title" />
        </div>
        <br />
        <div>
          year:
          <input type="text" v-model="newMovieParams.year" />
        </div>
        <br />
        <div>
          plot:
          <input type="text" v-model="newMovieParams.plot" />
        </div>
        <small v-if="newMovieParams.plot.length > 120">Characters over: {{ newMovieParams.plot.length - 120 }}</small>
        <small v-if="newMovieParams.plot.length < 120">
          Characters remaining: {{ 120 - newMovieParams.plot.length }}
        </small>
        <br />
        <div>
          director:
          <input type="text" v-model="newMovieParams.director" />
        </div>
      </div>
      <br />

      <input type="submit" value="createMovie" />
    </form>
  </div>
</template>

<style></style>
