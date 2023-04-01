  <template>
      <div id="kanban">
        <div class="cards">
          <div
            v-for="column in columns"
            :key="column.id"
            class="col"
            @click="selectedList = column"
          >
            <div class="col-header">
              <p class="col-name">{{column.name}}</p>
              <div class="options">
                <CIcon class="plus-icon" :icon="cilPlus" size="sm" @click="showModal"/>
                <CIcon class="trash-icon" :icon="cilTrash" size="sm" @click="deleteList(column)"/>
              </div>

            </div>
            <!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
                <draggable
                :list="column.tasks"
                item-key="id"
                class="list-group"
                ghost-class="ghost-card"
                group="tasks"
                @move="move"
                :animation="200"
                >
                <template #item="{element}">
                    <kanban-card
                    :task="element"
                    class="card"
                    ></kanban-card>
                </template>
                </draggable>
                <Modal v-show="isModalVisible" @close="closeModal">
                  <template v-slot:header>
                    Add Card
                  </template>
                  <template v-slot:body>
                    <form>
                      <div class="addproject-addprojtitle">
                  <div class="addproject-projtitletext">Card title:</div>
                  
                    <input type="text" class="addproject-inputbg" placeholder="Card title..." id="newProjName" v-model="taskName" required>
                  </div>
                  <div class="addproject-addprojtitle">
                  <div class="addproject-projtitletext">Due Date:</div>
                  
                    <input type="date" class="addproject-inputbg" id="newProjName" v-model="endDate">
                  
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
                  <button class="addproject-addbutton" @click="addCard(column)">Add Card</button>
                </div>
              </template>
            </Modal>
          </div>
        </div>
        <KanbanCreateList @create-list="createList" />
      </div>

  </template>
  
  <script>
  import { collection, getDocs, getFirestore, doc, addDoc, deleteDoc } from "firebase/firestore"
  import { auth, db } from "../../firebase/init.js"
  import { getAuth, onAuthStateChanged } from "@firebase/auth";
  import KanbanCard from "./KanbanCard.vue";
  import draggable from "vuedraggable";
  import KanbanCreateList from "./KanbanCreateList.vue";
  import Modal from "../Modal.vue"
  import { useLists } from "./KanbanAPI";
  import { CIcon } from '@coreui/icons-vue';
  import { cilPlus, cilTrash } from '@coreui/icons'; 

  export default {
    name: "KanbanBoard",
    display: "Simple",
    order: 0,
    components: {
        draggable,
        KanbanCard,
        KanbanCreateList,
        Modal,
        CIcon
    },
    setup() {
      return {
        cilPlus, 
        cilTrash
      }
    },
    methods: {
      async addCard(list) {
        this.selectedList = list;
        const auth = getAuth();
        const taskCollectionRef = collection(db, `lists/${list.id}/tasks`);
        const taskDoc = {
          listID: this.selectedList.id, // use the selected list to set the listID property
          taskName: this.taskName,
        };
        await addDoc(taskCollectionRef, taskDoc);
        console.log("card added");
        this.taskName = "";
        this.isModalVisible = false;
      },
      showModal() {
        this.isModalVisible = true; 
      },
      closeModal() {
        this.isModalVisible = false;
      },
      async deleteList(column) {
        const collectionRef = collection(db, "lists");
        const listDoc = doc(collectionRef, column.id);
        const taskCollection = collection(db, `lists/${column.id}/tasks`)
        const tasksDocs = await getDocs(taskCollection, column.id)
        tasksDocs.forEach(taskDoc => {
          const document = doc(taskCollection, taskDoc.id)
          deleteDoc(document); 
        })
        await deleteDoc(listDoc);
      }
    },
    data() {
    return {
      isModalVisible : false,
      columns: useLists(),
      taskName: "",
      selectedList: null

    };
  }
  };
  </script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
* {
  font-family: 'Josefin Sans', sans-serif;
}
#kanban {
    display: flex; 
    width: 100vw; 
    min-height: 100vh; 
    padding-left: 1rem;
}

.cards {
    display: flex; 
    padding-bottom: 3rem; 
    min-height: 100vh; 
}

.col {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem; 
    padding-left: 0.75rem;
    padding-right: 0.75rem; 
    margin-right: 1rem; 
    background-color: #F3F4F6; 
    border-radius: 0.25rem; 
    border-radius: 0.5rem;
    min-width: 305.12px;
}

.col-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}


.col-title {
    color: #374151; 
    font-family: 'Josefin Sans', sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem; 
    font-weight: 600; 
    letter-spacing: 0.025em; 
}
.col-name {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem; 
  padding-left: 0.75rem;
  padding-right: 0.75rem; 
}

.add-card-button {
    border: none;
    background-color: #b5b9c0;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem; 
    padding-left: 0.75rem;
    padding-right: 0.75rem; 
    cursor: pointer;
}

.options {
  display: flex;
  flex-direction: row;
}
.plus-icon {
  min-height: 50px;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem; 
  padding-left: 0.75rem;
  padding-right: 0.75rem; 
  cursor: pointer;
}
.trash-icon {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem; 
  padding-left: 0.75rem;
  padding-right: 0.75rem; 
  border-radius: 0.5rem;
  cursor: pointer;
}



.list-group-item {
    display: flex; 
    padding: 1rem; 
    margin-bottom: 0.75rem; 
    background-color: #ffffff; 
    justify-content: space-between; 
    align-items: center; 
    border-radius: 0.5rem; 
    cursor: move; 
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
}

.card {
    margin-top: 0.75rem; 
    cursor: move; 
}

.ghost-card {
  opacity: 0.5;
  background: #F7FAFC;
  border: 1px solid #4299e1;
}

input {
    text-indent: 8px;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  padding-right: 1rem;
  
}


</style>