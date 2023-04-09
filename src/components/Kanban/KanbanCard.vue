<template>
  <div class="card">
    <div class="card-only" v-if="!isChecked">
      <div class="card-contents">
        <div class="card-left">
          <CIcon class="circle-icon" :icon="cilCircle" size="sm" @click="toggleCheck"/>
          <p class="card-text">
            {{task.taskName}}
          </p>
        </div>
        <CIcon class="pencil-icon" :icon="cilPencil" @click="openModal" size="sm"/>
      </div>
      <div class="card-body">
        <p>
          {{task.about}}
        </p>
      </div>
      <div class="card-bottom">
        <span class="card-date">
          {{formattedDate}}
        </span>
        <span class="card-date">+100 Points</span>
      </div>
    </div>
    <div class="card-checked" v-else>
      <div class="card-contents">
        <div class="card-left">
          <CIcon class="circle-icon" :icon="cilCheckCircle" size="sm" @click="toggleCheck"/>
          <p class="card-text">
            {{task.taskName}}
          </p>
        </div>
        <CIcon class="pencil-icon" :icon="cilPencil" @click="openModal" size="sm"/>
      </div>
      <div class="card-body">
        <p>
          {{task.about}}
        </p>
      </div>
      <div class="card-bottom">
        <span class="card-date">
          {{formattedDate}}
        </span>
        <span class="card-date">+100 Points</span>
      </div>
    </div>
    <Modal v-show="isModalVisible" @close="closeModal">
      <template v-slot:header>
        Edit Card
      </template>
      <template v-slot:body>
        <form>
          <div class="addproject-addprojtitle">
            <div class="addproject-projtitletext">Card title:</div>
            <input type="text" class="addproject-inputbg" placeholder="Card title..." id="newProjName" v-model="taskName" required>
          </div>
          <div class="addproject-addprojtitle">
            <div class="addproject-projtitletext">Due Date:</div>
            <input type="date" class="addproject-inputbg" id="newProjName" v-model="formattedDate">
          </div>
          <div class="addproject-addprojtitle">
            <div class="addproject-projtitletext">Description</div>
            <textarea class="addproject-inputbg" id="newProjName" v-model="about"></textarea>
          </div>
          <div class="addproject-adduser">
            <div class="addproject-userstext">Authorised Users:</div>
            <input type="text" class="addproject-inputbg" placeholder="Username" id="newUsers" v-model="stakeHoldersID" required>
            <input type='button' class="addproj-adduser-btn" value='Add user' id='add'>
          </div> 
        </form>
      </template>
      <template v-slot:footer>
        <div class="addproject-pushbuttons">
          <button class="addproject-addbutton" @click.prevent="editCard()">Edit Card</button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import KanbanBadge from "./KanbanBadge.vue";
import { CIcon } from '@coreui/icons-vue';
import { cilCircle, cilPencil,cilCheckCircle } from '@coreui/icons'; 
import Modal from "../Modal.vue"
import { auth, db } from "../../firebase/init.js"
import { updateDoc, collection, doc, Timestamp } from 'firebase/firestore';


export default {
components: {
  KanbanBadge,
  CIcon,
  Modal
},
data() {
  return {
    isModalVisible: false,
    taskName: this.task.taskName, 
    about: this.task.about,
    formattedDate: this.formatDate(this.task.formattedDate),
    isChecked: this.task.isChecked
  }
},
setup() {
  return {cilCircle, cilPencil, cilCheckCircle}
},
props: {
  task: {
    type: Object,
    default: () => ({})
  }
},
computed: {
  badgeColor() {
    const mappings = {
      Design: "purple",
      "Feature Request": "teal",
      Backend: "blue",
      QA: "green",
      default: "teal"
    };
    return mappings[this.task.type] || mappings.default;
  }
}, 
methods: {
  openModal() {
    this.isModalVisible = true; 
  },
  closeModal() {
    this.isModalVisible = false; 
  }, 
  async editCard() {
    const subTaskCollection = collection(db, `lists/${this.task.listID}/tasks`)
    const taskCollection = collection(db, "tasks");
    const subTaskDoc = doc(subTaskCollection, this.task.id);
    const taskDoc = doc(taskCollection, this.task.id);
    const firebaseDate = Timestamp.fromDate(new Date(this.formattedDate));
    const updatedData = {
      taskName: this.taskName,
      endDate: firebaseDate,
      about: this.about
    }
    await updateDoc(subTaskDoc, updatedData);
    await updateDoc(taskDoc, updatedData);
    this.task.taskName = this.taskName;
    const newDate = firebaseDate.toDate()
    const formattedDate = newDate.toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric' 
    })
    this.formattedDate = formattedDate;
    this.task.about = this.about;

    this.isModalVisible = false;
  },
  formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return `${day} ${month} ${year}`;
  },
  async toggleCheck() {
    this.isChecked = !this.isChecked;
    console.log(this.isChecked);

    const subTaskCollection = collection(db, `lists/${this.task.listID}/tasks`)
    const taskCollection = collection(db, "tasks");
    const subTaskDoc = doc(subTaskCollection, this.task.id);
    const taskDoc = doc(taskCollection, this.task.id);

    const updatedData = {
      isChecked: this.isChecked
    }

    await updateDoc(subTaskDoc, updatedData)
    await updateDoc(taskDoc, updatedData)
  }
}
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
* {
  font-family: 'Josefin Sans', sans-serif;
}
.card-only {
  padding-left: 0.75rem;
  padding-right: 0.75rem; 
  padding-top: 0.75rem; 
  padding-bottom: 0.75rem; 
  background-color: #ffffff; 
  border-radius: 0.25rem; 
  border-width: 1px; 
  border-color: #ffffff; 
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
  max-width: 295px;
}

.card-checked {
  padding-left: 0.75rem;
  padding-right: 0.75rem; 
  padding-top: 0.75rem; 
  padding-bottom: 0.75rem; 
  background-color: #bdbbbb; 
  border-radius: 0.25rem; 
  border-width: 1px; 
  border-color: #ffffff; 
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
  max-width: 295px;
}

.card-contents {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 50px;
}

.card-left {
  display: flex;
  min-width: 200px;
}

.pencil-icon {
  max-width: 20px;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem; 
  padding-left: 0.75rem;
  padding-right: 0.75rem; 
  border-radius: 0.5rem;
  cursor: pointer;
}

.circle-icon {
  max-width: 15px;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem; 
  padding-left: 0.75rem;
  padding-right: 0.75rem; 
  border-radius: 0.5rem;
  cursor: pointer;
}

.card-text {
  color: #000000; 
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.1rem;
  line-height: 1.25rem; 
  font-weight: 600; 
  letter-spacing: 0.025em; 
}
.card-body {
  overflow-wrap: break-word;
  color: #4B5563;
}

.card-bottom {
  display: flex; 
  margin-top: 1rem; 
  justify-content: space-between; 
  align-items: center; 
}

.card-date {
  color: #4B5563; 
  font-size: 0.875rem;
  line-height: 1.25rem; 
}

input {
    text-indent: 8px;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  padding-right: 1rem;
  
}
textarea.addproject-inputbg {
  border: none;
  background-color: #edf2f7;
  padding: 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
}

</style>