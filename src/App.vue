<script>
  import axios from "axios";
  export default {
    data: function () {
      return {
        movies: [],
        newMovieParams: {},
      };
    },
    created: function () {
      this.indexMovies();
    },
    methods: {
      indexMovies: function () {
        axios.get("/movies.json").then((response) => {
          console.log("movies index", response);
          this.movies = response.data;
        });
      },
    },
  };
</script>

<template>
  <div class="home">
    <h1>All Movies</h1>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>
      <img v-bind:src="movie.url" v-bind:alt="movie.title" />
      <p>Director: {{ movie.director }}</p>
      <p>Genre: {{ movie.genre }}</p>
      <p>Runtime: {{ movie.runtime }}</p>
      <p>Rating: {{ movie.rating }}</p>
    </div>
  </div>
</template>

<style></style>