<template>
  <div id="screenfiller" v-if="user">
    <div class="ProjectTaskPage-container">
      <!-- Add List -->
      <div class="ProjectTaskPage-addlist">
        <img
          alt="line11124"
          src="/playground_assets/line11124-ajqm.svg"
          class="ProjectTaskPage-line1"
        />

        <span>&#43;</span>
        <span class="AddList">
          <button onclick="showListUserPopup">Add List</button>
        </span>
      </div>

      <!-- Project Title -->
      <div class="ProjectTaskPage-projtitle">
        <span class="ProjectTaskPage-Dayddmonth"
          ><span>Day, dd Month</span></span
        >
        <span class="ProjectTaskPage-Today"><span>Today</span></span>
        <span class="ProjectTaskPage-projectnumtasks"
          ><span>Project Num Tasks</span></span
        >
      </div>

      <!-- To Do -->
      <div class="ProjectTaskPage-todo">
        <!-- 
            <h3>To Do</h3>
        <button onclick="showAddCardPopup">Add Card</button> -->
        <div class="ProjectTaskPage-bottom">
          <div class="ProjectTaskPage-addcard">
            <span>&#43;</span>
            <span class="AddCard">
              <button onclick="showAddCardPopup">Add Card</button>
            </span>
          </div>
        </div>

        <!-- Task 1 -->
        <div class="ProjectTaskPage-task1">
          <span class="ProjectTaskPage-Title">
            <span> Title </span>
          </span>
          <div class="ProjectTaskPage-EditElem">
            <span class="EditElem">
                <button onclick="showEditElemPopup">Edit</button>
            </span>
          </div>
          <div class="ProjectTaskPage-Stakeholders">
            <span class="Stakeholders"><span>Stakeholders:</span></span>
            <span class="Names"><span>Bob,Adam</span></span>
          </div>

          <div class="ProjectTaskPage-Due">
            <span class="ProjectTaskPage-DueDate">
              <span> Due: </span>
            </span>
            <span class="ddmonthyyyy"><span>ddmonthyyyy</span></span>
          </div>
          <span class="points"><span>+100 points</span></span>
        </div>
        <span class="Todo"><span>To Do</span></span>
      </div>

      <!-- In Progress -->
      <div class="ProjectTaskPage-InProgess">

        <div class="ProjectTaskPage-bottom">
          <img
            alt="line11123"
            src="/playground_assets/line11123-klc.svg"
            class="InProgess-line"
          />
          <div class="ProjectTaskPage-addcard">
            <span>&#43;</span>
            <span class="AddCard">
              <button onclick="showAddCardPopup">Add Card</button>
            </span>
          </div>
        </div>
        <span class="InProgress"><span>In Progress</span></span>
        <!-- Task 2 -->
        <div class="ProjectTaskPage-task2">
          <span class="ProjectTaskPage-Title">
            <span> Title </span>
          </span>
          <div class="ProjectTaskPage-EditElem">
            <span class="EditElem">
                <button onclick="showEditElemPopup">Edit</button>
            </span>
          </div>
          <div class="ProjectTaskPage-Stakeholders">
            <span class="Stakeholders"><span>Stakeholders:</span></span>
            <span class="Names"><span>Bob,Adam</span></span>
          </div>
          <div class="ProjectTaskPage-Due">
            <span class="ProjectTaskPage-DueDate">
              <span>
                Due:
              </span>
            </span>
            <span class="ddmonthyyyy"><span>ddmonthyyyy</span></span>
          </div>
          <span class="points"><span>+100 points</span></span>
        </div>
      </div>

      <!-- Done -->
      <div class="ProjectTaskPage-Done">
        <span class="Done"><span>Done</span></span>
        <div class="ProjectTaskPage-bottom">
          <img
            alt="line11123"
            src="/playground_assets/line11123-klc.svg"
            class="InProgess-line"
          />
          <div class="ProjectTaskPage-addcard">
            <span>&#43;</span>
            <span class="AddCard">
              <button onclick="showAddCardPopup">Add Card</button>
            </span>
          </div>
        </div>
        <!-- Task 3 -->
        <div class="ProjectTaskPage-task3">
          <span class="ProjectTaskPage-Title">
            <span> Title </span>
          </span>
          <div class="ProjectTaskPage-EditElem">
            <span class="EditElem">
              <button onclick="showEditElemPopup">Edit</button>
            </span>
          </div>
          <div class="ProjectTaskPage-Stakeholders">
            <span class="Stakeholders"><span>Stakeholders:</span></span>
            <span class="Names"><span>Bob,Adam</span></span>
          </div>
          <div class="ProjectTaskPage-Due">
            <span class="ProjectTaskPage-DueDate">
              <span>
                Due:
              </span>
            </span>
            <span class="ddmonthyyyy"><span>ddmonthyyyy</span></span>
          </div>
          <span class="points"><span>+100 points</span></span>
        </div>
      </div>


      <!-- Users in Project -->
      <div class="ProjectTaskPage-UsersInProj">
        <span class="UserHeader">
          <span>
            <span>
              Users
            </span>
            <br />
            <span>In Project</span>
          </span>
        </span>

        <!-- User 1 -->
        <div class="ProjectTaskPage-User1">
            <span class="UserName"><span>Charles</span></span>
            <img
            alt="Icon"
            src="src/assets/login-person-icon.png"
            class="UserIcon"
          />
        </div>

        <!-- User 2 -->
        <div class="ProjectTaskPage-User2">
            <span class="UserName"><span>Bob</span></span>
            <img
            alt="Icon"
            src="src/assets/login-person-icon.png"
            class="UserIcon"
          />
        </div>
        <!-- User 3 -->
        <div class="ProjectTaskPage-User3">
            <span class="UserName"><span>Adam</span></span>
            <img
            alt="Icon"
            src="src/assets/login-person-icon.png"
            class="UserIcon"
          />
        </div>

        <!-- Add User Button -->
        <div class="UsersInProj-adduser">
        <span>&#43;</span>
        <span class="AddUser">
            <button onclick="showAddUserPopup">Add User</button>
        </span>
        </div>

      </div>

      <div class="Calendar-Tabs">
        <button class="Calendar"><span>Calendar</span></button>
      </div>
      <div class="Tasks-Tabs">
        <button class="Tasks"><span>Tasks</span></button>
      </div>

      <div>
        <SideBar />
      </div>

    </div>
  </div>
</template>

<script>
import SideBar from "@/views/SideBar.vue"
import { getAuth, onAuthStateChanged } from "@firebase/auth";

export default {
  name: "ProjectTaskPage",
  data() {
    return {
      addCardPopupVisible: false,
      addUserPopupVisible: false,
      addListPopupVisible: false,
      editElemPopupVisible: false,
      user : false 
    };
  },
    mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user; 
        } else {
          this.$router.push("/login");
        }
      })
    },
  methods: {
    showAddCardPopup() {
      this.addCardPopupVisible = true;
    },
    showAddUserPopup() {
      this.addUserPopupVisible = true;
    },
    showListUserPopup() {
      this.addListPopupVisible = true;
    },
    showEditElemPopup() {
      this.editElemPopupVisible = true;
    },
  },
  components: {SideBar}
};
</script>

<style scoped>
.ProjectTaskPage-container {
  width: 100%;
  height: 1024px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}

.ProjectTaskPage-addlist {
  top: 978px;
  left: 350px;
  width: 835px;
  height: 22px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.AddList {
  left: 16.000003814697266px;
  color: rgba(96, 96, 96, 1);
  width: 118px;
  height: auto;
  position: absolute;
  font-size: 20px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.ProjectTaskPage-addlist button {
  border-radius: 49px;
}
.ProjectTaskPage-addlist :hover{
    cursor: pointer;
}


.ProjectTaskPage-line1 {
  top: 0px;
  left: 0px;
  width: 835px;
  height: 0px;
  position: absolute;
}

.ProjectTaskPage-text {
  left: 16.000003814697266px;
  color: rgba(96, 96, 96, 1);
  width: 118px;
  height: auto;
  position: absolute;
  font-size: 20px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.ProjectTaskPage-vector {
  top: 1px;
  left: 0px;
  width: 12px;
  height: 12px;
  position: absolute;
}

.ProjectTaskPage-projtitle {
  top: 75px;
  left: 255px;
  width: 596px;
  height: 166px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.ProjectTaskPage-Dayddmonth {
  top: 138px;
  left: 193px;
  color: rgba(96, 96, 96, 1);
  width: 167px;
  height: auto;
  position: absolute;
  font-size: 20px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Yeseva One;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.ProjectTaskPage-Today {
  top: 131px;
  left: 95px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 30px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Yeseva One;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.ProjectTaskPage-projectnumtasks {
  color: rgba(0, 0, 0, 1);
  width: 596px;
  height: auto;
  position: absolute;
  font-size: 50px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Yeseva One;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.ProjectTaskPage-todo {
  top: 287px;
  left: 351px;
  width: 265px;
  height: 282px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.ProjectTaskPage-bottom {
  top: 259px;
  left: 0px;
  width: 265px;
  height: 23px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.ProjectTaskPage-addcard {
  top: 8px;
  left: 0px;
  width: 134px;
  height: 15px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 49px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.AddCard {
  left: 16.000003814697266px;
  color: rgba(96, 96, 96, 1);
  width: 118px;
  height: auto;
  position: absolute;
  font-size: 20px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.ProjectTaskPage-addcard button {
  border-radius: 49px;
}

.ProjectTaskPage-addcard :hover {
    cursor: pointer;
}

.ProjectTaskPage-task1 {
  top: 41px;
  left: 0px;
  width: 265px;
  height: 201px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(255, 145, 144, 1);
}
.ProjectTaskPage-Title {
  top: 14px;
  left: 47px;
  color: rgba(0, 0, 0, 1);
  width: 186px;
  height: auto;
  position: absolute;
  font-size: 23px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.ProjectTaskPage-EditElem {
  top: 167px;
  left: 220px;
  width: 38px;
  height: 20px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 49px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 1);
}

.ProjectTaskPage-EditElem button {
  border-radius: 49px;
}

.ProjectTaskPage-EditElem :hover {
    cursor: pointer;
}



.ProjectTaskPage-Stakeholders {
  top: 139px;
  left: 11px;
  width: 149px;
  height: 15px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.Stakeholders {
  color: rgba(96, 96, 96, 1);
  height: auto;
  position: absolute;
  font-size: 15px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.Names {
  left: 96px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 15px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.ProjectTaskPage-Due {
  top: 116px;
  left: 11px;
  width: 117px;
  height: 15px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.ProjectTaskPage-DueDate {
  color: rgba(96, 96, 96, 1);
  height: auto;
  position: absolute;
  font-size: 15px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.ddmonthyyyy {
  left: 36px;
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 15px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.points {
  top: 93px;
  left: 12px;
  color: rgba(96, 96, 96, 1);
  height: auto;
  position: absolute;
  font-size: 15px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}

.Todo {
  left: 88px;
  color: rgba(0, 0, 0, 1);
  width: 89px;
  height: auto;
  position: absolute;
  font-size: 30px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}


.ProjectTaskPage-InProgess{
  top: 286px;
  left: 635px;
  width: 265px;
  height: 502px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}

.InProgess-line {
  top: 0px;
  left: 0px;
  width: 265px;
  height: 0px;
  position: absolute;
}

.InProgress {
  left: 52px;
  color: rgba(0, 0, 0, 1);
  width: 158px;
  height: auto;
  position: absolute;
  font-size: 30px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.ProjectTaskPage-task2 {
  top: 41px;
  left: 0px;
  width: 265px;
  height: 201px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(254, 193, 149, 1);
}

.ProjectTaskPage-Done {
  top: 285px;
  left: 920px;
  width: 265px;
  height: 284px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.Done {
  left: 95px;
  color: rgba(0, 0, 0, 1);
  width: 75px;
  height: auto;
  position: absolute;
  font-size: 30px;
  align-self: auto;
  font-style: Regular;
  text-align: center;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.ProjectTaskPage-task3 {
  top: 42px;
  left: 0px;
  width: 265px;
  height: 201px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgba(208, 255, 180, 1);
}
.ProjectTaskPage-UsersInProj {
  top: 199px;
  left: 1205px;
  width: 160px;
  height: 330px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.UserHeader {
  color: rgba(0, 0, 0, 1);
  height: auto;
  position: absolute;
  font-size: 30px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Yeseva One;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.UsersInProj-adduser {
  top: 315px;
  left: 0px;
  width: 134px;
  height: 15px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 49px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.AddUser {
  left: 16px;
  color: transparent;
  width: 118px;
  height: auto;
  position: absolute;
  font-size: 20px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.UsersInProj-adduser button {
  border-radius: 49px;
}

.ProjectTaskPage-adduser :hover {
    cursor: pointer;
}
.ProjectTaskPage-User1 {
  top: 169px;
  left: 0px;
  width: 160px;
  height: 47px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.UserName {
  top: 14px;
  left: 53px;
  color: rgba(30, 30, 30, 1);
  width: 107px;
  height: auto;
  position: absolute;
  font-size: 25px;
  align-self: auto;
  font-style: Regular;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.UserIcon {
  top: 12px;
  left: 13px;
  width: 21px;
  height: 25px;
  position: absolute;
}
.ProjectTaskPage-User2 {
  top: 242px;
  left: 0px;
  width: 160px;
  height: 47px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.ProjectTaskPage-User3 {
  top: 96px;
  left: 0px;
  width: 160px;
  height: 47px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.ProjectTaskPage-User1:hover {
    cursor: pointer;
}.ProjectTaskPage-User2:hover {
    cursor: pointer;
}
.ProjectTaskPage-User3:hover {
    cursor: pointer;
}

.Calendar-Tabs {
  top: 192px;
  left: 995px;
  width: 153px;
  height: 42px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;

}

.Calendar {
    font-family: 'Josefin Sans', sans-serif;
    font-size: large;
    color: white;
    width: 136px;
    height: 43px;
    right: 0px; /* Adjusted value */
    top: 640px;
    background: #5E72EB;
    border: #130D6F;
    border-radius: 49px;
}

.Calendar:hover {
    cursor: pointer;
}

.Tasks-Tabs {
  top: 192px;
  left: 800px;
  width: 153px;
  height: 42px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;

}

.Tasks {
    font-family: 'Josefin Sans', sans-serif;
    font-size: large;
    color: white;
    width: 136px;
    height: 43px;
    right: 0px; /* Adjusted value */
    top: 640px;
    background: #130D6F;
    border: #5E72EB;
    border-radius: 49px;
}

.Tasks:hover {
    cursor: pointer;
}



</style>
