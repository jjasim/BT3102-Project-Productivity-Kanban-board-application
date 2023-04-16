import { ref, onMounted, onUnmounted } from 'vue';
import { db, auth } from '../../firebase/init.js'
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';

export const getUser = () => {
  const user = ref(null);
  onMounted(() => {
    const usersQuery = query(collection(db, 'users'), where("uid", "==", auth.currentUser.uid)); 
    let unsubscribe = onSnapshot(usersQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const userData = {
          uid: doc.get('uid'),
          name: doc.get('name'),
          email: doc.get('email'),
          points: doc.get('points'),
        };
        return userData;
      });
      user.value = data;
    });
    onUnmounted(unsubscribe);
  });
  console.log(user);
  return user;
};
