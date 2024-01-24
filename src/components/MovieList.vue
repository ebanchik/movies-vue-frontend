<template>
 <h2 class="title">All Movies</h2>
 <div class="movies-container">
    <div class="movie" v-for="movie in movies" v-bind:key="movie.id">
      <img v-bind:src="movie.image" class="movie-image" />
      <button class="more-info" v-on:click="showMovie(movie)">More info</button>
    </div>
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

<style>

.movies-container {
  padding-top: 75px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: 40px; /* Adjust left margin */
  margin-right: 40px;
}
.title {
  text-align: center;
  border: auto;
  border: 8px dotted #bb1717;
  border-radius: 5px;
  width: 500px;
  margin: auto;
  font-size: 50px;
}

.titles {
  display: inline-block;
  padding: 10px;
  border: auto;
  border-radius: 10px;
  border: 3px solid;
}

.movie_list {
  padding: 10px;
}

.movie {
  text-align: center;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  width: calc(25% - 20px); /* Adjust width and margin */
  margin: 10px; /* Adjust as needed */
}

.more_info {
  display: block;
  margin: auto;
  align-content: center;
}

.movie-image {
  width: 100%; /* Image takes full width of the container */
  height: auto; /* Height adjusts automatically to maintain aspect ratio */
  border-radius: 10px; /* Optional: to match container's border radius */
  padding-bottom: 10px;
}

</style>