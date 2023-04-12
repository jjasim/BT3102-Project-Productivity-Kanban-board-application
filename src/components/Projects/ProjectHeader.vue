<template>
    <div class="header">
      <div class="project-name">
        My Projects
    </div>
      <div class="buttons">
        <button @click="showModalCreate">Create Project</button>
        <button @click="showModalJoin">Join Project</button>
      </div>
    </div>
    <Modal v-show="isModalVisibleCreate" @close="closeModalCreate">
      <template v-slot:header>
        Create Project
      </template>
      <template v-slot:body>
        <form>
          <div class="addproject-addprojtitle">
            <div class="addproject-projtitletext">Project Name:</div>
            <input type="text" class="addproject-inputbg" placeholder="Project name..." id="newProjName" v-model="projName" required>
          </div>
                  <div class="addproject-adduser">
                    <div class="addproject-userstext">Stakeholders:</div>
                    <input type="text" class="addproject-inputbg" placeholder="Username" id="newUsers" v-model="stakeHolderEmail">
                    <input type='button' class="addproj-adduser-btn" value='Add user' id='add' @click="addStakeholder">
                    <div>
                      {{ formattedStakeHolders }}
                    </div>
          </div> 
        </form>
      </template>
      <template v-slot:footer>
        <div class="addproject-pushbuttons">
          <button class="addproject-addbutton" @click.prevent="createProject()">Submit</button>
        </div>
      </template>
    </Modal>
  </template>
  
  <script>
import { addDoc, collection, doc, getDocs, query, where } from 'firebase/firestore';
import Modal from '../Modal.vue';
import { db } from '../../firebase/init';
import { getAuth } from 'firebase/auth';
  export default {
    name: "Header",
    components: {
      Modal
    },
    computed: {
      formattedStakeHolders() {
        return this.stakeHolderArrayEmail.join(", ")
      }
    },
    data() {
      return {
        isModalVisibleCreate: false,
        isMoadlVisibleJoin: false,
        projName: "",
        stakeHolderEmail: "",
        stakeHolderArrayEmail: [],
        stakeHolderArrayID: []
      }
    },
    mounted() {
    },
    methods: {
      showModalCreate() {
        this.isModalVisibleCreate = true;
      },
      showModalJoin() {
        this.isMoadlVisibleJoin = true;
      },
      closeModalCreate() {
        this.isModalVisibleCreate = false;
      },
      async createProject() {
        const auth = getAuth();
        this.stakeHolderArrayID.push(auth.currentUser.uid);
        const projCollectionRef = collection(db, 'projects');
        const projDoc = {
          Name: this.projName,
          users: this.stakeHolderArrayID,
        }
        await addDoc(projCollectionRef, projDoc);
        this.projName = "";
        this.stakeHolderArrayID = [];
        this.stakeHolderArrayEmail = [];
        this.isModalVisibleCreate = false;
      },
      async addStakeholder() {
        const userQuery = query(collection(db, 'users'), where("email", "==", this.stakeHolderEmail));
        const querySnapshot = await getDocs(userQuery);
        const stakeholder = querySnapshot.docs[0];
        if (stakeholder) {
          this.stakeHolderArrayID.push(stakeholder.data().uid)
          this.stakeHolderArrayEmail.push(this.stakeHolderEmail);
        }
        this.stakeHolderEmail = "";
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
  * {
    font-family: 'Josefin Sans', sans-serif;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 10px 20px;
    
  }
  .project-name {
    font-size: 35px;
    font-weight: bold;
    align-items: center;
  }
  .buttons {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 20rem;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    background: #5E72EB;
    color: white;
    border: none;
    border-radius: 49px;
    cursor: pointer;
    text-align: center;
  }

  button.clicked {
    background-color: #130D6F;
  }
  .btn:hover {
      cursor: pointer;
  }
  </style>
  