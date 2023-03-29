  <template>
      <div id="kanban">
        <div class="cards">
          <div
            v-for="column in columns"
            :key="column.title"
            class="col"
          >
            <div class="col-header">
              <p>{{column.title}}</p>
              <button class="add-card-button" @click="showModal">+ Add Card</button>
            </div>
            <!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
                <draggable
                :list="column.tasks"
                item-key="id"
                class="list-group"
                ghost-class="ghost-card"
                group="tasks"
                :animation="200"
                >
                <template #item="{element}">
                    <kanban-card
                    :task="element"
                    class="card"
                    ></kanban-card>
                </template>
                </draggable>
          </div>
        </div>
        <KanbanCreateList @create-list="createList" />
      </div>
      <Modal v-show="isModalVisible" @close="closeModal">
            <template v-slot:header>
              Add Card
            </template>
            
            <template v-slot:footer>
              <div class="addproject-pushbuttons">
                <button class="addproject-addbutton">Add project</button>
              </div>
            </template>
          </Modal>
  </template>
  
  <script>
  import KanbanCard from "./KanbanCard.vue";
  import draggable from "vuedraggable";
  import KanbanCreateList from "./KanbanCreateList.vue";
  import Modal from "../Modal.vue"
  export default {
    name: "KanbanBoard",
    display: "Simple",
    order: 0,
    components: {
        draggable,
        KanbanCard,
        KanbanCreateList,
        Modal
    },
    methods: {
      createList(listName) {
        this.columns.push({
          title: listName,
          tasks: []
        });
        console.log(this.columns)
      },
      showModal() {
        this.isModalVisible = true; 
      },
      closeModal() {
        this.isModalVisible = false;
      },
    },
    data() {
    return {
      isModalVisible : false, 
      columns: [
        {
          title: "Backlog",
          tasks: [
            {
              id: 1,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 2,
              title: "Provide documentation on integrations",
              date: "Sep 12",
              type: "Feature Request"
            },
            {
              id: 3,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 4,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 5,
              title: "Test checkout flow",
              date: "Sep 15",
              type: "QA"
            }
          ]
        }
      ]
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

.add-card-button {
    border: none;
    background-color: #b5b9c0;
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
</style>