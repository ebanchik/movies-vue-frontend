<template>
  <h2>All Movies</h2>
  <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>
      <img v-bind:src="movie.url" />
      <p>Director: {{ movie.director }}</p>
      <p>Genre: {{ movie.genre }}</p>
      <p>Runtime: {{ movie.runtime }}</p>
      <p>Rating: {{ movie.rating }}</p>
      <button v-on:click="showMovie(movie)">More info</button>
    </div>
    <dialog id="movie-details">
       <form method="dialog">
         <h1>Movie info</h1>
          <p>Name: {{ currentMovie.title }}</p>
          <p>Director: {{ currentMovie.director }}</p>
          <p>Genre: {{ currentMovie.genre }}</p>
          <p>Runtime: {{ currentMovie.runtime }}</p>
          <p>Rating: {{ currentMovie.rating }}</p>
         <button>Close</button>
       </form>
     </dialog>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      movies: [],
      currentMovie: {},
    };
  },
  created: function () {
      this.indexMovies();
    },
    methods: {
      indexMovies: function () {
        axios.get("http://localhost:5000/movies.json").then((response) => {
          console.log("movies index", response);
          this.movies = response.data;
        });
      },
      showMovie: function (movie) {
        this.currentMovie = movie;
        this.editMovieParams = movie;
        document.querySelector("#movie-details").showModal();
      },
  }
};
</script>