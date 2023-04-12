import { ref, reactive, onMounted, onUnmounted, watchEffect } from 'vue';
import { db, auth } from '../../firebase/init.js'
import { collection, query, where, onSnapshot } from 'firebase/firestore';


export const getCards = () => {
    const cards = ref([]);

    onMounted(() => {
        const listQuery = query(collection(db, 'tasks'), where("stakeHolderArrayID", "array-contains", auth.currentUser.uid));
        let unsubscribe = onSnapshot(listQuery, (snapshot) => {
            const data = snapshot.docs.map((doc) => {
                const card = {
                    id: doc.id,
                    completed: doc.get('isChecked'),
                    endDate: doc.get('endDate').toDate(),
                    listID: doc.get('listID'),
                    name: doc.get('taskName'),
                    points: doc.get('points'),
                    location: "",
                };

                const list_id = doc.get('listID');
                const projectQuery = query(collection(db, 'projects'), where("lists", "array-contains", list_id));
                let unsubscribeCards = onSnapshot(projectQuery, (projectSnapshot) => {
                    const cardsData = projectSnapshot.docs.map((nameDoc) => {
                        return nameDoc.get('Name');
                    });
                    card.location = cardsData;
                });
                onUnmounted(unsubscribeCards);
                return card;
            });
        cards.value = data;
    });
    onUnmounted(unsubscribe);
  });
  return cards;
};
