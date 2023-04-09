import { ref, onMounted, onUnmounted } from 'vue';
import { db, auth } from '../../firebase/init.js'
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';

// gets tasks across all projects and individual
export const getCards = () => {
    const data = ref([]);
    
    onMounted(() => {
        let cards = [];
        const listQuery = query(collection(db, 'tasks'), where("stakeHolderArrayID", "array-contains", auth.currentUser.uid));
        let unsubscribe = onSnapshot(listQuery, (snapshot) => {
            snapshot.docs.forEach((doc) => { 
                const card = {
                    id: doc.id,
                    completed: doc.get('isChecked'),
                    endDate: doc.get('endDate').toDate(),
                    listID: doc.get('listID'), 
                    name: doc.get('taskName'),
                    points: doc.get('points'),
                }

                const projectQuery = query(collection(db, 'projects'), where("lists", "array-contains", card.listID)); 
                onSnapshot(projectQuery, (projectSnapshot) => {
                    const locat = projectSnapshot.docs.map((projectDoc) => {
                        card.location = projectDoc.get('Name');
                    })
                });
                cards.push(card)
            });
        });               
        const indivQuery = query(collection(db, 'individualtasks'), where("uid", "==", auth.currentUser.uid)); 
        let unsubscribe2 = onSnapshot(indivQuery, (indivSnapshot) => {
            indivSnapshot.docs.forEach((doc) => {
            const card = {
                id: doc.id,
                completed: doc.get('completed'),
                endDate: doc.get('endDate').toDate(),
                name: doc.get('Name'),
                points: doc.get('points'),
                location: "Individual task",
                uid: auth.currentUser.uid,
            }
            cards.push(card);
        });
        data.value = cards;
    });
    onUnmounted(unsubscribe);
    onUnmounted(unsubscribe2);
});
console.log(data); 
return data;
};

