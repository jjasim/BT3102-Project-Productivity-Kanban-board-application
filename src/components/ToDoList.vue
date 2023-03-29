<template>
      <form @submit.prevent="addItem" autocomplete="off">
        <div class="todolisttitle">Tasks</div>
        <label> Your tasks today: {{ isComplete }} / {{ totalItems }}</label>

      <!-- Show added items in list view-->
      <ul class="task-list">
        <!-- v-for to iterates over the items array and create a list of item for each item in the array -->
        <!-- v-bind to check whether item is completed or not-->
        <li class="task-list-item" v-for="(item, index) in items" :key="index" v-bind:class="{completed: item.completed}">
          <div class="item-details">
            <input type="checkbox" 
            v-model="item.completed"/>
            <span class="item-title">
              {{ item.text }}</span>
            <div class="item-d">
              <img
                src="src/assets/ToDoList-calendar.png"
                alt="Icon"
              />
              <a class="item-duedate">{{ item.due }}</a>
              <a class="item-location">in {{  item.location }}</a>
            </div>
          </div>
          <!-- delete item on click-->
          <a class="item-points">+ {{ item.points }} points</a>
          <button v-on:click= "deleteItem(index)"
            class="button btn-delete"> - </button>
        </li>
      </ul>

      <!-- to add new item into the list -->
      <div class="task">
      <input
        type="text"
        class="task-input"
        v-model="newItem"
        placeholder="Add individual task"
      />

      <div class="sidebar-addproj" @click="showModal">
        <CIcon :icon="cilCalendar" size="xl"/>
        Add individual task
      </div>

          <!-- Add item on click -->
          <button  class="button btn-add">Add</button>
          <Modal v-show="isModalVisible" @close="closeModal">
            <template v-slot:header>
              Add project
            </template>
            
            <template v-slot:body>
              <form>
              <div class="addproject-addprojtitle">
                <div class="addproject-projtitletext">Project title:</div>
                
                  <input type="text" class="addproject-inputbg" placeholder="eg. Stakeholder Analysis" id="newProjName" required>
                
              </div>
                <div class="addproject-adduser">
                  <div class="addproject-userstext">Authorised Users:</div>
                
                  <input type="text" class="addproject-inputbg" placeholder="Username" id="newUsers" required>
                  <input type='button' class="addproj-adduser-btn" value='Add user' id='add' @click="addUser()">
                
                <div class="addproject-addeduserstext">Added users:</div>
                <ul class="addproject-currentusers" id='list'>
                    <li>{{  user.email  }}</li>
                </ul>
              </div> 
            </form>
            </template>

            <template v-slot:footer>
              <div class="addproject-pushbuttons">
                <button class="addproject-addbutton" @click="addData">Add project</button>
              </div>
            </template>
          </Modal>
      </div>
      
      </form>
  </template>
  
  <script>
  import Modal from '@/components/Modal.vue';
  import { CIcon } from '@coreui/icons-vue';
  import { cilCalendar } from '@coreui/icons';

  let task = {text: "Task 1", points: 100, due: "due date", completed: false, location: "Individual Tasks"};

  export default {
    data() {
      return {
        newItem: "", //item before adding into array
        items: [task], //store items in array
      };
    },
    computed: {
      totalItems() {
        return this.items.length; //auto increment of 1 of each items added into array
      },
      isComplete() {
        return this.items.filter(item => item.completed).length; //to get completed [checkbox: checked] 
      }
    },
    methods: {
      addItem() {
        if (this.newItem !== "") {
          this.items.push({text: this.newItem, points: 100, due: "due date", completed: false, location: "individual"}); //check if input field is empty, if not empty then push [input] into array [items] and mark not completed [checkbox: unchecked]
          this.newItem = ""; //input becomes empty
        }
      },
      deleteItem(index) {
        this.items.splice(index, 1); //remove item
      }
    },
    components: {Modal, CIcon},
    setup() {
      return {
        cilCalendar 
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
  background-color: #fff;
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 6px;
  margin: 0 0 5px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  flex: 1 0 auto;
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
  height: 34px;
  border: none;
  border-radius: 5px;
  background-color: #ff2c2c;
  color: white;
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
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 10px;
  border-bottom-color: black;
  border-bottom: 9px;
}
.task-list-item input:checked + a{
  color: grey;
}
.task-list-item input:checked + span{
  text-decoration: line-through;
}

.item-details {
  flex-direction: column;
  width: 100%;
}

.item-title {
  font-style: Regular;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
  height: auto;
  font-size: 23px;
  flex-direction: row;
}

.item_d{
  flex-direction: row;
  margin-left: 5%;
}

.item-duedate {
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
  </style>