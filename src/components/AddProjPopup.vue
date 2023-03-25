<template>
         <Modal v-show="isModalVisible" @close="closeModal">
          <template v-slot:header>
              Add project
          </template>
            
          <template v-slot:body>
                <section class="addproject-addprojtitle">
                  <div for="project title" class="addproject-projtitletext">Project title:</div>
                  
                <form>
                  <input type="text" class="addproject-inputbg" placeholder="eg. Stakeholder Analysis" required>
                </form>
              </section>
                <section class="addproject-adduser">
                  <div for="authorised users" class="addproject-userstext">Authorised Users:</div>
                
                <form>
                  <input type="text" class="addproject-inputbg" placeholder="Username" required>
                </form>
              </section> 
                
          </template>

        <template v-slot:footer>
            <section class="addproject-pushbuttons">
                <button class="addproject-addbutton" @click="closeModal">Add</button>
            </section>
        </template>
        </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';

export default {
  name: 'AddProjectPopup',
  props: {
    msg: String
  },
  data(){
    return {
        addProjPopupVisible: false,
        isModalVisible: false,
        user : false,
      }
  },
  mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user; 
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
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addproject-bg {
top: 75px;
left: 238px;
width: 21px;
height: 21px;
position: absolute;
border-color: rgba(0, 0, 0, 1);
border-style: solid;
border-width: 1px;
border-radius: 22px;
}

button {
width: 75px;
font-size: 16px;
background: rgba(94, 114, 235, 1);
padding: 0.4rem 1.3rem;
text-align: center;
align-self: auto;
border: none;
cursor: pointer;
justify-content: flex-start;
flex-direction: row;
border-radius: 4px;
margin: 10px;
display: flex;
}
span{
width: 30px;
float: right;
cursor: pointer;
}
span:hover{
color: brown;
}
.previous{
border: 1.5px solid;
padding:5px;
margin-bottom: 10px;
}
.addproject-addproject {
width: 100%;
height: 420px;
display: flex;
overflow: hidden;
position: relative;
align-items: flex-start;
flex-shrink: 0;
border-color: transparent;
background-color: rgba(255, 255, 255, 1);
}
.addproject-edit {
top: 373px;
left: 579px;
width: 75px;
height: 24px;
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
background-color: rgba(94, 114, 235, 1);
}
.addproject-addtext {
top: 5px;
left: 13px;
color: rgba(255, 255, 255, 1);
width: 49px;
height: auto;
position: absolute;
font-size: 18px;
align-self: auto;
font-style: Regular;
text-align: center;
font-family: Josefin Sans;
font-weight: 400;
line-height: normal;
font-stretch: normal;
text-decoration: none;
}
.addproject-popuptitle {
top: 72px;
left: 29px;
width: 596px;
height: 59px;
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
.addproject-popuptitle {
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
.addproject-details {
top: 164px;
left: 29px;
width: 625px;
height: 176px;
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
.addproject-adduser {
top: 69px;
left: 0px;
width: 625px;
height: 107px;
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
.addproject-rectangle4 {
top: 65px;
left: 278px;
width: 347px;
height: 42px;
position: absolute;
border-color: rgba(0, 0, 0, 1);
border-style: solid;
border-width: 1px;
border-radius: 22px;
}
.addproject-text04 {
top: 77px;
left: 295px;
color: rgba(127, 127, 127, 1);
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
.addproject-user {
top: 0px;
left: 225px;
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
.addproject-text06 {
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
.addproject-ellipse2 {
top: 0px;
left: 0px;
width: 47px;
height: 47px;
position: absolute;
border-color: transparent;
}
.addproject-s-giconperson {
top: 12px;
left: 13px;
width: 21px;
height: 25px;
position: absolute;
}
.addproject-userstitle {
top: 11px;
color: rgba(0, 0, 0, 1);
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
.addproject-userbg {
top: 298px;
left: 307x;
width: 347px;
height: 42px;
position: absolute;
border-color: rgba(0, 0, 0, 1);
border-style: solid;
border-width: 1px;
border-radius: 22px;
}
.addproject-projtitle {
top: 0px;
left: 1px;
width: 624px;
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
border-radius: 0px 0px 0px 0px;
flex-direction: row;
justify-content: flex-start;
background-color: transparent;
}
.addproject-projtitletext {
top:72px;
left: 29px;
width: 596px;
height: 59px;
color: rgba(0, 0, 0, 1);
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
.addproject-bg {
top: 0px;
left: 169px;
width: 455px;
height: 42px;
position: absolute;
border-color: rgba(0, 0, 0, 1);
border-style: solid;
border-width: 1px;
border-radius: 22px;
}
.addproject-text12 {
top: 9px;
left: 189px;
color: rgba(127, 127, 127, 1);
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
</style>