<script>
  import axios from "axios";
  export default {
    data: function () {
      return {
        movies: [],
        newMovieParams: {},
        editMovieParams: {},
        currentMovie: {},
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
      createMovie: function () {
       axios
         .post("/movies.json", this.newMovieParams)
         .then((response) => {
           console.log("movies create", response);
           this.movies.push(response.data);
           this.newMovieParams = {};
         })
         .catch((error) => {
           console.log("movies create error", error.response);
         });
     },
     showMovie: function (movie) {
        this.currentMovie = movie;
        this.editMovieParams = movie;
        document.querySelector("#movie-details").showModal();
      },
      updateMovie: function (movie) {
        axios
          .patch("/movies/" + movie.id + ".json", this.editMovieParams)
          .then((response) => {
            console.log("movies update", response);
            this.currentMovie = {};
          })
          .catch((error) => {
            console.log("movies update error", error.response);
          });
      },
    },
  };
</script>

<template>
  <div class="home">
    <h1>New Movie</h1>
    <div>
      Name:
      <input type="text" v-model="newMovieParams.name" />
      Width:
      <input type="text" v-model="newMovieParams.width" />
      Height:
      <input type="text" v-model="newMovieParams.height" />
      Url:
      <input type="text" v-model="newMovieParams.url" />
      <button v-on:click="createMovie()">Create Movie</button>
    </div>
    <h1>All Movies</h1>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>
      <img v-bind:src="movie.url" v-bind:alt="movie.title" />
      <p>Director: {{ movie.director }}</p>
      <p>Genre: {{ movie.genre }}</p>
      <p>Runtime: {{ movie.runtime }}</p>
      <p>Rating: {{ movie.rating }}</p>
      <button v-on:click="showMovie(movie)">More info</button>
    </div>
    <dialog id="movie-details">
       <form method="dialog">
         <h1>Movie info</h1>
         <p>Name: <input type="text" v-model="editMovieParams.name" /></p>
         <p>Director: <input type="text" v-model="editMovieParams.director" /></p>
         <p>Genre: <input type="text" v-model="editMovieParams.genre" /></p>
         <p>Runtime: <input type="text" v-model="editMovieParams.runtime" /></p>
         <p>Rating: <input type="text" v-model="editMovieParams.rating" /></p>
         <button v-on:click="updateMovie(currentMovie)">Update</button>
         <button>Close</button>
       </form>
     </dialog>
  </div>
</template>

<style></style>