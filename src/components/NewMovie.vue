<template>
  <div>
  <h1>New Movie</h1>
  <div class="form-container">
    <div class="form-group">
      <label for="title">Title:</label>
      <input id="title" type="text" v-model="newMovieParams.title" />
    </div>
    <div class="form-group">
      <label for="director">Director:</label>
      <input id="director" type="text" v-model="newMovieParams.director" />
    </div>
    <div class="form-group">
      <label for="genre">Genre:</label>
      <input id="genre" type="text" v-model="newMovieParams.genre" />
    </div>
    <div class="form-group">
      <label for="runtime">Runtime:</label>
      <input id="runtime" type="text" v-model="newMovieParams.runtime" />
    </div>
    <div class="form-group">
      <label for="rating">Rating:</label>
      <input id="rating" type="text" v-model="newMovieParams.rating" />
    </div>
    <button v-on:click="createMovie()">Create Movie</button>
  </div>
</div>

</template>

<script>
import axios from "axios";


export default {
  data() {
    return {
      newMovieParams: {
        
      },
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


<style>
.centered-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  height: 100vh; /* Full viewport height */
  align-items: center; /* Center vertically */
}

.form-container {
  width: 50%; /* Adjust the width of the form as needed */
}

.form-group {
  margin-bottom: 20px;
  margin-top: 20px; /* Space between form groups */
}

.form-group input {
  display: block; /* Each input takes the full width */
  width: 100%; /* Full width of the form-group */
  margin-top: 5px; /* Space between label and input */
  margin-left: 25px;
}

.form-group label {
  display: block; /* Ensure labels are on their own line */
  margin-left: 25px;
}

button {
  margin-left: 25px;
}

</style>
