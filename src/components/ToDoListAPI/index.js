import { ref, onMounted, onUnmounted } from 'vue';
import { db, auth } from '../../firebase/init.js'
import { collection, query, where, onSnapshot } from 'firebase/firestore';


export const getCards = () => {
    const cards = ref([]);

    // retrieve all tasks a user has across all their projects
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
                    projID: doc.get("projID")
                };
                const projectQuery = query(collection(db, 'projects'));
                let unsubscribeCards = onSnapshot(projectQuery, (querySnapshot) => {
                    const matchingDocs = querySnapshot.docs.filter(projdoc => projdoc.id === doc.get("projID"));
                    matchingDocs.forEach((pdoc) => {
                        card.location = pdoc.get('Name');
                    });
                    console.log("running correctly");
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
