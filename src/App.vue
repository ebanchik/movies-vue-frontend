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
      updateMovie: function (movie) {
        axios
          .patch("http://localhost:5000/movies/" + movie.id + ".json", this.editMovieParams)
          .then((response) => {
            console.log("movies update", response);
            this.currentMovie = {};
          })
          .catch((error) => {
            console.log("movies update error", error.response);
          });
      },
      destroyMovie: function (movie) {
       axios.delete("http://localhost:5000/movies/" + movie.id + ".json").then((response) => {
         console.log("movies destroy", response);
         var index = this.movies.indexOf(movie);
         this.movies.splice(index, 1);
       });
     },
  };
</script>

<template>
  <div id="app">
    <!-- Optional: Navigation Links -->
    <nav class="nav-links">
      <router-link to="/">Home |  </router-link>
      <router-link to="/new-movie"> New Movie</router-link>
    </nav>

    <!-- Router View -->
    <router-view></router-view>
  </div>
</template>

<style>

.nav-links {
  font-size: 20px; /* Increase font size */
  padding: 10px; /* Add padding around the links */
}

</style>