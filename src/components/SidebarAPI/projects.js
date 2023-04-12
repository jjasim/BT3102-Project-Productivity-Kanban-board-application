import { ref, onMounted, onUnmounted } from 'vue';
import { db, auth } from '../../firebase/init.js'
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';

export const getProjects = () => {
  const projects = ref(null);
  onMounted(() => {
    const projQuery = query(collection(db, 'projects'), where("users", "array-contains", auth.currentUser.uid)); 
    let unsubscribe = onSnapshot(projQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const proj = {
          projID: doc.id, 
          name: doc.get('Name'),
          users: doc.get('users')
        };
        return proj; 
      });
      projects.value = data;
    });
    onUnmounted(unsubscribe);
  });
  console.log(projects)
  return projects;
};