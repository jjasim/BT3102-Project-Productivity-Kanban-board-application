import { ref, onMounted, onUnmounted } from 'vue';
import { db, auth } from '../../../firebase/init.js'
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';

export const useLists = () => {
  const lists = ref([]);
  const loading = ref(true);

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
              isChecked: taskDoc.get('isChecked'),
              about: taskDoc.get('about')
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
