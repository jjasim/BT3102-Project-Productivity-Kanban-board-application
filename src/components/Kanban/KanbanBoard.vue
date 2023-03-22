  <template>
      <div id="kanban">
        <div class="cards">
          <div
            v-for="column in columns"
            :key="column.title"
            class="col"
          >
            <p class="col-title">{{column.title}}</p>
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
      </div>
  </template>
  
  <script>
  import KanbanCard from "./KanbanCard.vue";
  import draggable from "vuedraggable";
  export default {
    name: "KanbanBoard",
    display: "Simple",
    order: 0,
    components: {
        draggable,
        KanbanCard
    },
    data() {
    return {
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
              date: "Sep 12"
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
        },
        {
          title: "In Progress",
          tasks: [
            {
              id: 6,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 7,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 8,
              title: "Provide documentation on integrations",
              date: "Sep 12",
              type: "Backend"
            }
          ]
        },
        {
          title: "Review",
          tasks: [
            {
              id: 9,
              title: "Provide documentation on integrations",
              date: "Sep 12"
            },
            {
              id: 10,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 11,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 12,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 13,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            }
          ]
        },
        {
          title: "Done",
          tasks: [
            {
              id: 14,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            },
            {
              id: 15,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design"
            },
            {
              id: 16,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request"
            }
          ]
        }
      ]
    };
  }
  };
  </script>
<style scoped>
#kanban {
    display: flex; 
    background-color: #E5E7EB; 
    justify-content: center; 
    align-items: center; 
    width: 100vw; 
    min-height: 100vh; 
}

.cards {
    display: flex; 
    overflow-x: scroll; 
    padding-top: 3rem;
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
}

.col-title {
    color: #374151; 
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; 
    font-size: 0.875rem;
    line-height: 1.25rem; 
    font-weight: 600; 
    letter-spacing: 0.025em; 
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