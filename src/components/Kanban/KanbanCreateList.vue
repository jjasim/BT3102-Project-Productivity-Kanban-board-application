<template>
    <div class="CreateList">
        <button v-if="!addingList" class="add-list" @click="addingList = true">+ Add List</button>
        <form v-else @submit.prevent="createList">
            <input type="text" v-model="newListName" placeholder="Enter list name" required/>
            <div class="button-group">
                <button class="button button-submit" type="submit">Create</button>
                <button class="button button-cancel" type="button" @click="cancelListCreation">Cancel</button>
            </div>
        </form>   
    </div>
</template>

<script>
import KanbanBadge from "./KanbanBadge.vue";
import { collection, getDocs, getFirestore, doc, addDoc, serverTimestamp, Timestamp } from "firebase/firestore"
import { auth, db } from "../../firebase/init.js"
import { getAuth, onAuthStateChanged } from "@firebase/auth";

export default {
    components: {
        KanbanBadge,
    },
    data() {
    return {
      addingList: false,
      newListName: ""
    };
  },
  methods: {
    async createList() {
        const auth = getAuth();
        const collectionRef = collection(db, "lists");
        const listDoc = {
            userUID : auth.currentUser.uid,
            name : this.newListName,
            timestamp: Timestamp.now(),
            projID: this.$route.params.projID
        }
        const docRef = await addDoc(collectionRef, listDoc);
        const id = docRef.id;
        this.$emit("create-list", {id, name : this.newListName});
        console.log("list created")
        this.addingList = false;
        this.newListName = "";
    },
    cancelListCreation() {
      this.addingList = false;
      this.newListName = "";
    }
  }

};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

button {
    cursor: pointer;
}
.add-list {
    font-family: 'Josefin Sans', sans-serif;
    font-size: large;
    width: 136px;
    border: #FFFFFF;
    background-color: #F3F4F6;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem; 
    padding-left: 0.75rem;
    padding-right: 0.75rem; 
    border-radius: 0.5rem; 
}
input {
    width: 136px;
    border: #FFFFFF;
    background-color: #F3F4F6;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem; 
    padding-left: 0.75rem;
    padding-right: 0.75rem; 
    border-radius: 0.5rem; 
    border: 1px solid #FFFFFF;
    line-height: normal;
    text-indent: 10px;
}

.button-group {
    padding-top: 0.3rem;
}

.button-submit {
    font-family: 'Josefin Sans', sans-serif;
    color: #FFFFFF;
    width: 68px;
    border: #FFFFFF;
    background-color: #5E72EB;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem; 
    padding-left: 0.75rem;
    padding-right: 0.75rem; 
    border-radius: 0.5rem; 
}

.button-cancel {
    font-family: 'Josefin Sans', sans-serif;
    width: 68px;
    border: #FFFFFF;
    background-color: #FFFFFF;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem; 
    padding-left: 0.75rem;
    padding-right: 0.75rem; 
    border-radius: 0.5rem; 
}

</style>