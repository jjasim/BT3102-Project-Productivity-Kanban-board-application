import { ref, reactive, onMounted, onUnmounted, watchEffect } from 'vue';
import { db, auth } from '../../firebase/init.js'
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';

// gets tasks across individual
export const getIndiv = () => {
  const indivs = ref([]);

  onMounted(() => {
    const indivQuery = query(collection(db, 'individualtasks'), where("uid", "==", auth.currentUser.uid));
    let unsubscribe = onSnapshot(indivQuery, (indivSnapshot) => {
      const data = indivSnapshot.docs.map((doc) => {
        const card = {
          id: doc.id,
          completed: doc.get('completed'),
          endDate: doc.get('endDate').toDate(),
          name: doc.get('Name'),
          points: doc.get('points'),
          location: "Individual task",
          uid: auth.currentUser.uid,
        }
        return card
      });
      indivs.value = data;
    });
    onUnmounted(unsubscribe);
  });
    return indivs;
};
