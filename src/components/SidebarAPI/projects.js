import { ref, onMounted, onUnmounted } from 'vue';
import { db, auth } from '../../firebase/init.js'
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';

export const getProjects = () => {
    const data = ref([]);
  
    onMounted(() => {
      let projects = [];
      const projQuery = query(collection(db, 'projects'), where("users", "array-contains", auth.currentUser.uid)); 
      let unsubscribe = onSnapshot(projQuery, (snapshot) => {
        snapshot.docs.forEach((doc) => {
            const proj = {
                projID: doc.id, 
                name: doc.get('Name'),
                link: doc.id,
            }
          projects.push(proj);    
        });
        data.value = projects;
      });
      onUnmounted(unsubscribe);
    });
    console.log(data); 
    return data;
  };