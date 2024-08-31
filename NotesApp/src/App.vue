<script setup>
  import {ref} from 'vue'

  const showModal = ref(false);
  // when ever plus button is clicked, the above reference is to be set to true
  // if showModal is true, render the modal window, otherwise not

  // we will bind the textarea widget to a state variable to hold the note text
  // using 'two way binding' - and v-model directive
  const newNote = ref("");

  // the following is a state variable that will hold a list of all completed codes
  // when a user adds a note, this list of objects will be updated (note will be pushed)
  const notes = ref([]);
  // we will iterate over this state variable and a render every object in html

  // a state variable for error message
  // if this is true, then show the error (too short note or too long note)
  const errorMessage = ref("");

  function getRandomColor() {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%";
  }

  const addNote = () => {
    // validation
    if (newNote.value.length < 9) {
      // if note length is less than 9, return early and do not go further
      // update: after adding error message we no longer will use empty return
      // instead we will set the errorMessage to true
      return errorMessage.value = "Note needs to be at least 9 characters.";
    }
    notes.value.push({
      id: Math.floor(Math.random() * 1_000_000),
      text: newNote.value,
      date: new Date(),
      backgroundColor: getRandomColor(),
    });
    showModal.value = false;
    newNote.value = "";
    errorMessage.value = "";
  };
</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model.trim="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <p v-if="errorMessage">{{errorMessage}}</p>
        <!-- if errorMessage is an empty string, it is falsy, so errorMessage will not show -->
        <!-- because of v-if -->
        <button @click="addNote">Add Note</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div v-for="note in notes" class="card" :key="note.id" :style="{backgroundColor: note.backgroundColor}">
          <!-- for note in notes array (for loop) -->
          <p class="main-text">{{note.text}}</p>
          <p class="date">{{note.date.toLocaleDateString("en-US")}}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    height: 100vh;
    width: 100vw;
  }
  .container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
  }

  header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21, 20, 20);
    border-radius: 100%;
    color: white;
    font-size: 20px;
  }

  .card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .date {
    font-size: 12.5px;
    font-weight: bold;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: gray;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    width: 750px;
    background-color: lightgray;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blueviolet;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
  }

  .modal .close {
    background-color: darkred;
    margin-top: 7px;
  }

  .modal p {
    color: red;
  }
</style>