import { ref, onMounted, onUnmounted } from 'vue';
import { db, auth } from '../../firebase/init.js'
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';

// gets tasks across all projects and individual
export const getCards = () => {
    const data = ref([]);
    
    onMounted(() => {
        let cards = [];
        const cardsQuery = query(collection(db, 'cards'), where("stakeholderID", "array-contains", auth.currentUser.uid)); 
        let unsubscribe = onSnapshot(cardsQuery, (snapshot) => {
            snapshot.docs.forEach((doc) => {
            const card = {
                completed: doc.get('completed'),
                endDate: doc.get('endDate').toDate(),
                listID: doc.get('listID'), 
                name: doc.get('name'),
                points: doc.get('points'),
            }

            const projectQuery = query(collection(db, 'projects'), where("lists", "array-contains", card.listID)); 
            onSnapshot(projectQuery, (projectSnapshot) => {
                const location = projectSnapshot.docs.map((projectDoc) => {
                    return projectDoc.get('Name');
                })
            card.location = location;
            });
        cards.push(card);    
        });
        data.value = cards;
    });
    onUnmounted(unsubscribe);
    });

    onMounted(() => {
        let cards = [];
        const indivQuery = query(collection(db, 'individualtasks'), where("uid", "==", auth.currentUser.uid)); 
        let unsubscribe = onSnapshot(indivQuery, (indivSnapshot) => {
            indivSnapshot.docs.forEach((doc) => {
            const card = {
                completed: doc.get('completed'),
                endDate: doc.get('endDate').toDate(),
                name: doc.get('Name'),
                points: doc.get('points'),
                location: "Individual task"
            }
            cards.push(card);
        }); 
        data.value = data.value.concat(cards);
    });
    onUnmounted(unsubscribe);
    });
console.log(data); 
return data;
};

