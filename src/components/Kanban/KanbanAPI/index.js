import { ref, onMounted, onUnmounted } from 'vue';
import { db, auth } from '../../../firebase/init.js'
import { collection, query, where, onSnapshot } from 'firebase/firestore';

export const useLists = () => {
  const lists = ref([]);

  onMounted(() => {
    const listsQuery = query(collection(db, 'lists'), where("userUID", "==", auth.currentUser.uid)); 
    let unsubscribe = onSnapshot(listsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          name: doc.get('name'),
          userUID: doc.get('userUID')
        };
      });
      lists.value = data;
    });
    onUnmounted(unsubscribe);
  });

  return lists;
}

export const useCards = () => {
  const cards = ref([]);

  onMounted(() => {
    const cardsQuery = query(collection(db, 'cards'), where("userUID", "==", auth.currentUser.uid)); 
    let unsubscribe = onSnapshot(cardsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          name: doc.get('name'),
          userUID: doc.get('userUID')
        };
      });
      lists.value = data;
    });
    onUnmounted(unsubscribe);
  });

  return lists;
}