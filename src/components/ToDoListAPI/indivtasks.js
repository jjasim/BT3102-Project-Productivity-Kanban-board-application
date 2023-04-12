import { ref, onMounted, onUnmounted } from 'vue';
import { db, auth } from '../../firebase/init.js'
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';

// gets tasks across individual
export const getIndiv = () => {
    const data = ref([]);
    
    onMounted(() => {
        let cards = [];
        const indivQuery = query(collection(db, 'individualtasks'), where("uid", "==", auth.currentUser.uid)); 
        let unsubscribe = onSnapshot(indivQuery, (indivSnapshot) => {
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
});
console.log(data); 
return data;
};

