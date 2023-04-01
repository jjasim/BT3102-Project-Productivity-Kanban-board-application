import { ref, onMounted, onUnmounted } from 'vue';
import { db, auth } from '../../../firebase/init.js'
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';

export const useLists = () => {
  const lists = ref([]);

  onMounted(() => {
    const listsQuery = query(collection(db, 'lists'), where("userUID", "==", auth.currentUser.uid)); 
    let unsubscribe = onSnapshot(listsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const listData = {
          id: doc.id,
          name: doc.get('name'),
          userUID: doc.get('userUID'),
          tasks: []
        };
        
        // Fetch tasks for the current list
        const tasksQuery = query(collection(db, `lists/${doc.id}/tasks`));
        onSnapshot(tasksQuery, (tasksSnapshot) => {
          const tasksData = tasksSnapshot.docs.map((taskDoc) => {
            return {
              id: taskDoc.id,
              taskName: taskDoc.get('taskName'),
            };
          });
          listData.tasks = tasksData;
        });
        return listData;
      });
      lists.value = data;
    });
    onUnmounted(unsubscribe);
  });
  console.log(lists)
  return lists;
};
