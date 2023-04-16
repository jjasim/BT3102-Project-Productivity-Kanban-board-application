import { ref, onMounted, onUnmounted } from 'vue';
import { db, auth } from '../../../firebase/init.js'
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';

export const useLists = (projID) => {
  const lists = ref([]);

  onMounted(() => {
    console.log(auth.currentUser)
    const listsQuery = query(collection(db, 'lists'), where("projID", "==", projID)); 
    let unsubscribe = onSnapshot(listsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const listData = {
          id: doc.id,
          name: doc.get('name'),
          userUID: doc.get('userUID'),
          projID: doc.get("projID"),
          tasks: [],
        };
        
        // Fetch tasks for the current list and listen for changes
        const tasksQuery = query(collection(db, `lists/${doc.id}/tasks`), orderBy("endDate", "asc"));
        let unsubscribeTasks = onSnapshot(tasksQuery, (tasksSnapshot) => {
          const tasksData = tasksSnapshot.docs.map((taskDoc) => {
            const endDate = taskDoc.get('endDate').toDate()
            const formattedDate = endDate.toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric' 
            })
            console.log(taskDoc.get('about'))
            return {
              id: taskDoc.id,
              listID: doc.id,
              taskName: taskDoc.get('taskName'),
              endDate: taskDoc.get('endDate'),
              formattedDate,
              completed: taskDoc.get('completed'),
              about: taskDoc.get('about'),
              stakeHolderArrayID: taskDoc.get('stakeHolderArrayID'),
              stakeHolderArrayEmail: taskDoc.get('stakeHolderArrayEmail'),
              points: taskDoc.get('points'),
              cardColour: taskDoc.get('cardColour')
            };
          });
          listData.tasks = tasksData;
        });
        
        // Unsubscribe from the tasks listener when the list is deleted
        onUnmounted(() => {
          unsubscribeTasks();
        });
        
        return listData;
      });
      lists.value = data;
    });
    onUnmounted(unsubscribe);
  });

  return lists;
};
