<template>
    <div class="container">
<div class="messaging">
        <div class="mesgs">
          <div class="msg_history">
            <div v-for="message in messages" class="incoming_msg">
              <div :class= " [message.author === this.email ? 'received_msg' : 'sent_msg']" >
                <div class="received_withd_msg">
                  <p>{{ message.message }}</p>
                  <span class="time_date"> {{ message.date }} | {{ message.author }}</span></div>
              </div>
            </div>
          </div>
          <div class="type_msg">
            <div class="input_msg_write">
              <input @keyup.enter="saveMessage" v-model="message" type="text" class="write_msg" placeholder="Type a message" />
            </div>
          </div>
        </div>
      </div>
    
    </div>
</template>

<script>
import { collection, query, getDocs, onSnapshot, getFirestore, doc, addDoc, serverTimestamp, Timestamp, orderBy, where } from "firebase/firestore"
import { auth, db } from "../firebase/init.js"
import { getAuth, onAuthStateChanged } from "@firebase/auth";

export default {
    name: 'ChatBox',
  data() {
    return {
        message: null,
        messages: [],
        user: null,
        email: null
    }
  },
  mounted() {


    const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        } 
      })

      this.email = auth.currentUser.email;
      this.fetchMessages();
    },
  methods: {
    async saveMessage() {

        const chatCollection= collection(db, "chat");
        const auth = getAuth()
        const msg = {
            message: this.message,
            createdAt: new Date(),
            date: new Date().toLocaleString(),
            author: auth.currentUser.email,
            proj: this.$route.params.projID
        }
        const chatData = await addDoc(chatCollection, msg);

        this.message = null;
    },

    async fetchMessages() {
        const getChat = query(collection(db, "chat"), where("proj", "==", this.$route.params.projID), orderBy("createdAt"));
        const chats = onSnapshot(getChat, (querySnapshot) => {
            let allMessages = [];
            querySnapshot.forEach((doc) => {
                allMessages.push(doc.data())
            })

            this.messages = allMessages;
        })

        
    },

  }
}
</script>
<style scoped>
* {
font-family: 'Josefin Sans', sans-serif;
}
.container{max-width:300px; margin:auto;}
img{ max-width:100%;}

.received_msg {
  display: flex;
  padding: 5px 0 0 10px;
  vertical-align: top;
  width: 90%;  
  float: right;             
 }
 .received_withd_msg p {
  background: #0d24a8 none repeat scroll 0 0;
  border-radius: 3px;
  color: white;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: black;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 65%;}
.mesgs {
  padding: 50px 15px 0 25px;
  width: 100%;
}

 .sent_msg p {
  background: #5e72eb none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
.sent_msg {
  float: left;
  width: 100%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: black;
  font-size: 15px;
  min-height: 48px;
  width: 80%;
}

.type_msg {border-top: 1px solid #c4c4c4; width: 80%; position: relative;}

.msg_history {
  height: 700px;
  overflow-y: auto;
  padding: 0 10px 0 0;
}
</style>
