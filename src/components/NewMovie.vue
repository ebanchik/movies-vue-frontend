<template>
  <div>
    <h1>New Movie</h1>
    <div>
      Title:
      <input type="text" v-model="newMovieParams.title" />
      Width:
      <input type="text" v-model="newMovieParams.width" />
      Height:
      <input type="text" v-model="newMovieParams.height" />
      Url:
      <input type="text" v-model="newMovieParams.url" />
      <button v-on:click="createMovie()">Create Movie</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newMovieParams: {},
    };
  },
  methods: {
    createMovie() {
      axios
        .post("http://localhost:5000/movies.json", this.newMovieParams)
        .then((response) => {
          console.log("movies create", response);
          this.newMovieParams = {};
          this.$router.push('/'); // Redirect to home page after creation
        })
        .catch((error) => {
          console.log("movies create error", error.response);
        });
    }
  }
};
</script>
