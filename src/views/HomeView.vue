<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
      currentMovie: {},
    };
  },
  created: function () {
    this.moviesIndex();
  },
  methods: {
    moviesIndex: function () {
      axios.get("http://localhost:3000/movies.json").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
    showMovie: function (movie) {
      console.log(movie);
      this.currentMovie = movie;
      document.querySelector("#movie-details").showModal();
    },
    updateMovie: function (movie) {
      var editMovieParams = movie;
      axios.patch("http://localhost:3000/movies/" + movie.id + ".json", editMovieParams).then((response) => {
        console.log("success", response.data);
      });
    },
    destroyMovie: function (movie) {
      axios.delete("http://localhost:3000/movies/" + movie.id + ".json").then((response) => {
        console.log("successfully deleted", response.data);
        var index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>Movies!</h1>
    <div>
      <div v-for="movie in movies" :key="movie.id">
        <h2>{{ movie.title }}</h2>
        <h3>{{ movie.plot }}</h3>
        <button id="info-button" @click="showMovie(movie)">click to update</button>
        <a :href="`/movie/${movie.id}`"><button>more info</button></a>
      </div>
      <div>
        <dialog id="movie-details">
          <form method="dialog">
            <h1>Movie Info</h1>
            <p id="movie-id">title:</p>
            <input type="text" v-model="currentMovie.title" />
            <p id="movie-id">year:</p>
            <input type="text" v-model="currentMovie.year" />
            <p id="movie-id">plot:</p>
            <input type="text" v-model="currentMovie.plot" />
            <br />
            <button @click="updateMovie(currentMovie)">Update</button>
            <button @click="destroyMovie(currentMovie)">Delete</button>
            <button>Close</button>
          </form>
        </dialog>
      </div>
    </div>
  </div>
</template>

<style></style>
