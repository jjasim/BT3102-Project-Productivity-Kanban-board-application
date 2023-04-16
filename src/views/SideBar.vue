<template>
  <div class="sidebar-bg" v-if="user" >
    <div class="sidebar-header" >
       <!-- user's name -->
      <div class="SideBar-Name">
        <CIcon :icon="cilUser" size="custom"></CIcon>
        <span class="sidebar-usersname"><span>{{ userDetails[0].name }}</span></span>
      </div>
      <!-- users points -->
      <div>
      <CIcon :icon="cilGem" size="custom"></CIcon>
      <span class="sidebar-pointstext"><span>{{ userDetails[0].points }}</span></span>
      </div>
    </div>
    <div class="sidebar-body" >
      <!-- home -->
      <div class="sidebar-homebutton">
        <router-link to="/home">Home</router-link>
      </div>
      <!-- team projects -->
      <div class="sidebar-homebutton">
        <router-link to="/projects">Team Projects</router-link>
      </div>
          <!-- analytics -->
        <div class="sidebar-analyticsbutton">
          <router-link to="/home">Analytics</router-link>
        </div>
      </div>

        
      <div class="sidebar-footer">
        <!-- signout -->
        <button class="sidebar-signout" @click.prevent="signOut"><span>Sign out</span></button>
      </div>
      </div>
</template>
  
  <script>
import Modal from '@/components/Modal.vue';
import dropdown from '@/components/Dropdown.vue';
import { getProjects } from '../components/SidebarAPI/projects.js';
import { CIcon } from '@coreui/icons-vue';
import { cilGem, cilUser } from '@coreui/icons';
import { auth, db } from "../firebase/init.js"
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { collection, getDocs, doc, addDoc, setDoc, query, where } from "firebase/firestore";
import { getUser } from '../components/SidebarAPI/userinfo.js';


  export default {
    name: 'Sidebar',
    components: {Modal, dropdown, CIcon},
    setup() {
      return {
        cilGem,
        cilUser
      }
    },
    data() {
      return { 
        isModalVisible: false,
        user : false,
        projName: "",
        userDetails: getUser()
      }
    },
    mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        } else {
          this.$router.push("/login")
        }
      })
    },
    methods: {
      async signOut() {
        const auth = getAuth();
        const user = auth.currentUser;
        await signOut(auth, user);
        this.$router.push("/login")
      },
      showModal() {
        console.log(getProjects());
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  }

  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
  * {
    font-family: 'Josefin Sans', sans-serif;
  }
  .sidebar-bg {
    width: 15%;
    height: 100%;
    display: flex;
    position: fixed;
    overflow: hidden;
    box-sizing: border-box;
    flex-shrink: 1;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #5E72EB;
    padding-top: 3%; 
    align-content: space-between;
    top: 0;
    left: 0;
    bottom: 0;
  }

  .sidebar-header {
    height: 20%;
    width: 100%;
    display: flex;
    overflow: hidden;
    align-self: auto;
    box-sizing: border-box;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-radius: 0px 0px 0px 0px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding-left: 3%;
  }
  .sidebar-body {
    height: 60%;
    width: 100%;
    display: flex;
    overflow: hidden;
    align-self: auto;
    box-sizing: border-box;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-radius: 0px 0px 0px 0px;
    flex-direction: column;
    justify-content: flex-start;
  }

  .sidebar-footer {
    height: 20%;
    width: 100%;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    flex-shrink: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .SideBar-Name{
    width: auto;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .sidebar-addproj {
    align-self: auto;
    background-color: transparent;
    margin-left: 5%;
    color: rgba(255, 255, 255, 1);
    height: auto;
    width: 100%;
    font-size: 20px;
    font-style: Regular;
    text-align: left;
    font-family: Josefin Sans;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
  }

  .sidebar-addproj:hover {
  background: #e1e1e1;
  cursor: pointer
  }

  .sidebar-usersname {
    color: rgba(255, 255, 255, 1);
    font-style: Regular;
    text-align: left;
    font-family: Josefin Sans;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
    height: auto;
    align-self: auto;
    font-size: 23px;
    padding-left: 2%;
    
  }
  .sidebar-points {
    display: flex;
    padding: 1%;
    flex-shrink: 1;
    border-color: transparent;
    border-style: none;
    border-width: 0;
    border-radius: 0px 0px 0px 0px;
    flex-direction: row;
    justify-content: flex-start;
    background-color: transparent;
    align-items: center;
    margin-top: 5%;
  }
  .sidebar-pointstext {
    color: rgba(255, 255, 255, 1);
    height: auto;
    font-size: 20px;
    font-style: Regular;
    text-align: center;
    font-family: Josefin Sans;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
  }
  .sidebar-pointsvector {
    padding: 3%;
  }
  .sidebar-homebutton {
    color: rgba(255, 255, 255, 1);
    height: auto;
    font-size: 25px;
    align-self: auto;
    font-style: Regular;
    text-align: left;
    font-family: 'Josefin Sans';
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
    background: none;
    margin-left: 5%;
    margin-top: 5%;
  }

  .sidebar-homebutton:hover {
  background: #e1e1e1;
  cursor: pointer;
}
  .sidebar-analyticsbutton{
    color: rgba(255, 255, 255, 1);
    height: auto;
    font-size: 25px;
    align-self: auto;
    font-style: Regular;
    text-align: left;
    font-family: Josefin Sans;
    font-weight: 400;
    line-height: normal;
    font-stretch: normal;
    text-decoration: none;
    background: none;
    margin-left: 5%;
    margin-top: 5%;
  }
  .sidebar-analyticsbutton:hover {
  background: #e1e1e1;
  cursor: pointer;
}


  .sidebar-signout {
  border-color: transparent;
  color: rgba(94, 114, 235, 1);
  padding: 2%;
  width: 40%;
  font-size: 15px;
  font-style: Regular;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 400;
  background: white;
  border-radius: 12px;
  cursor: pointer;
}

a { 
  text-decoration: none; 
  color: white 
}
input {
    text-indent: 10px;
}

.icon {
  height: 24px;
  padding: 2%;
  color: white;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
</style>
  