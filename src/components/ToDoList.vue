<template>
  <div class="todolist-bg">
      <form @submit.prevent="addData" autocomplete="off">
        <div class="todolisttitle">Tasks</div>
        <label> Completed tasks today: {{ isComplete }} / {{ totalItems }}</label>

      <!-- Show added items in list view-->
      <ul class="task-list">
        <!-- v-for to iterates over the items array and create a list of item for each item in the array -->
        <!-- v-bind to check whether item is completed or not-->
        <li class="task-list-item" v-for="(item) in items" :key="item.id" v-bind:class="{completed: item.completed}">
          <div class="item-details">
            <input class="checkbox" type="checkbox" 
            v-model="item.completed" v-on:change="clickChecked(item)"/>
            <span class="item-title">{{ item.name }}</span>
            <div>
              <a class="item-duedate"><CIcon :icon="cilCalendar" size="custom"/> {{  `${item.endDate.getDate()}/${item.endDate.getMonth()+1}/${item.endDate.getFullYear()}` }}</a>
              <a class="item-location">in {{ item.location }}</a>
            </div>
        </div>
          <div class="item-points">+ {{ item.points }} points</div>
          <button v-on:click= "deleteItem(index)"
            class="button btn-delete"><CIcon :icon="cilTrash" size="custom"></CIcon> </button>
        </li>
      </ul>

      <!-- to add new item into the list -->
      <div class="task">
      <div class="task-input" @click="showModal"><CIcon :icon="cilLibraryAdd" size="custom"/> Add individual task</div>
      </div>
      
      <!-- add project pop up -->
      <Modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header>
          Add individual task
        </template>
            
        <template v-slot:body>
          <form @submit.prevent="addData" >
            <div class="addproject-addprojtitle">
              <div class="addproject-projtitletext">Task:</div>
                <input type="text" class="addproject-inputbg" placeholder="eg. Stakeholder Analysis" id="newTaskName" v-model="newItem" required>  
              </div>
              <div class="addproject-adduser">
                <div class="addproject-userstext">Due date:</div>
                  <Datepicker class="addproject-inputbg" id="dueDate" v-model="picked" placeholder="YYYY-MM-DD"></Datepicker>
              </div> 
            </form>
            </template>

            <template v-slot:footer>
              <div class="addproject-pushbuttons">
                <button class="addproject-addbutton" type="submit" @click.prevent="addData">Add task</button>
              </div>
            </template>
          </Modal>

      </form>
    </div>
  </template>
  
  <script>
  import Modal from '@/components/Modal.vue';
  import { getCards } from '@/components/ToDoListAPI/index.js';
  import { CIcon } from '@coreui/icons-vue';
  import { cilCalendar, cilLibraryAdd, cilTrash } from '@coreui/icons';
  import Datepicker from '@/components/Datepicker/Datepicker.vue';
  import { auth, db } from "../firebase/init.js"
  import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
  import { collection, getDocs, doc, addDoc, setDoc, updateDoc } from "firebase/firestore";

  export default {
    mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        }
      })
    },
    computed: {
      totalItems() {
        return this.items.length; //auto increment of 1 of each items added into array
      },
      isComplete() {
        return this.items.filter(item => item.completed).length; //to get completed [checkbox: checked] 
      }
    },
    data() {
      return {
        newItem: "", //item before adding into array
        items: getCards(),
        isModalVisible: false,
        picked: new Date(),
        user: false,
        completed: false,
      };
    },
    methods: {
      async addData() {
        try {
          await addDoc(collection(db, 'individualtasks'), {
            Name: this.newItem,
            points: 100,
            endDate: this.picked,
            completed: false,
            uid: auth.currentUser.uid,
          });
          this.isModalVisible = false;
          this.newItem = "";
          this.picked = new Date();
          document.getElementById("newTaskName").value = "";
        } catch(err) {
            this.errorMsg = err.message
            this.error = true;
        }
      },
      deleteItem(index) {
        this.items.splice(index, 1); //remove item
      },
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
        document.getElementById("dueDate").value = "";
        document.getElementById("newTaskName").value = "";
      },
      async clickChecked(item) {
        try {
          const docRef = doc(db, 'individualtasks', item.id);
          await updateDoc(docRef, {
            completed: true,
          });
          console.log('Field updated successfully.');
          this.completed = false;
        } catch (error) {
        console.error('Error updating field: ', error);
        }
      },
    },
    components: {Modal, CIcon, Datepicker},
    setup() {
      return {
        cilCalendar,
        cilLibraryAdd,
        cilTrash,
      }
  }
  };
  </script>
  
  <style scoped >
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
  * {
    font-family: 'Josefin Sans', sans-serif;
  }

  .todolisttitle {
  color: rgba(0, 0, 0, 1);
  height: auto;
  font-size: 30px;
  font-style: Regular;
  text-align: left;
  font-family: Yeseva One;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

body{
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
}

form {
  margin: 5px;
  align-items: center;
  background: white;
  text-align: left;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  background-color: #EEEEEE;
  width: auto;
}
h1{
  color: black;
  font-weight: bold;
}
label {
  padding-bottom: 10px;
}
button{
  font-weight: bold;
}
ul {
  list-style: none;
  padding: 0;
}
.wrapper{
  background-color: #fff;
  padding: 5px;
  align-items: center;
}

.task {
  width: 100%;
  margin-top: 10px;
  height: 40px;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
}
.complete {
  text-decoration: line-through;
}
.task-input{
  color: #616161;
}
.btn-add{
  flex-shrink: 0;
  height: 34px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #5E72EB;
  color: rgba(255, 255, 255, 1);
}

.btn-delete{
  margin-left: auto;
  border: none;
  background: none;
  color: #616161;
  float: right;
}
.task-list {
  border-radius: 2px;
  display: block;
  width: 100%;
}
.task-list-item {
  width: 100%;
  display:flex;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
  border-bottom-color: #616161;
  border-bottom: solid;
}
.item-details input:checked + div{
  color: grey;
}
.item-details input:checked + span{
  text-decoration: line-through;
}

.item-details {
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
}

.item-title {
  font-style: Regular;
  font-family: Josefin Sans;
  font-size: 23px;
}

.item-duedate {
  margin: 0% 1% 0% 3%;
  color: #FEC195;
  padding: 5px;
  font-size: 20px;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
}

.vertical {
  border-left: 1px solid black;
  height: 5px;
}

.item-location {
  color: #616161;
  font-style: Regular;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  font-size: 20px;
}

.item-points {
  color: #FF9190;
}
.checkbox {
  color:#5E72EB;
}

.icon {
  height: 20px;
}
  </style>