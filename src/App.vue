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
      createPhoto: function () {
       axios
         .post("/photos.json", this.newPhotoParams)
         .then((response) => {
           console.log("photos create", response);
           this.photos.push(response.data);
           this.newPhotoParams = {};
         })
         .catch((error) => {
           console.log("photos create error", error.response);
         });
     },
    },
  };
</script>

<template>
  <div class="home">
    <h1>New Photo</h1>
    <div>
      Name:
      <input type="text" v-model="newPhotoParams.name" />
      Width:
      <input type="text" v-model="newPhotoParams.width" />
      Height:
      <input type="text" v-model="newPhotoParams.height" />
      Url:
      <input type="text" v-model="newPhotoParams.url" />
      <button v-on:click="createPhoto()">Create Photo</button>
    </div>
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