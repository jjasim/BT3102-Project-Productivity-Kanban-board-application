<template>
    <div id="calendar-display" class="flex-column">

        <div id="calendar-body" class="flex-row">

            <div id="calendar-proper">
                <calendar-view
                    :items="itemsWithColor"
                    :enable-drag-drop="true"
                    @drop-on-date="onDrop"
                    :show-date="state.showDate"
                    :show-month="true"
                    :show-weekday="true"
                    :show-week-numbers="true"
                    :disable-past="true"
                    :item-classes="itemClasses"
                    class="holiday-us-traditional holiday-us-official"
                    id="calendar-body">
                    <template #header="{ headerProps }">
                        <CalendarViewHeader :header-props="headerProps" @input="setShowDate" />
                    </template>

                </calendar-view>
            </div>

            <div class="box" id="add-item" v-if="addItems">
                <h1 class="title">Add an item</h1>
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input v-model="state.newItemTitle" class="input" type="text" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Start date</label>
                    <div class="control">
                        <input v-model="state.newItemStartDate" class="input" type="date" />
                    </div>
                </div>

                <div class="field">
                    <label class="label">End date</label>
                    <div class="control">
                        <input v-model="state.newItemEndDate" class="input" type="date" />
                    </div>
                </div>
                <button class="button is-info" @click="clickTestAddItem">Add Item</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import { 
        CalendarView, 
        CalendarViewHeader,
        CalendarMath
    } from "vue-simple-calendar"

    import { ICalendarItem, INormalizedCalendarItem } from "../components/CalendarAPI/ICalendarItem"

    import {
        onMounted,
        reactive,
        //computed
    } from "vue"

    import "../../node_modules/vue-simple-calendar/dist/style.css"
    // The next two lines are optional themes
    import "../../node_modules/vue-simple-calendar/dist/css/default.css"
    import "../../node_modules/vue-simple-calendar/dist/css/holidays-us.css"
    //import "../../../node_modules/vue-simple-calendar/dist/src/CalendarViewHeader.vue"
    import Sidebar from "../views/SideBar.vue"
    import { getDocs } from 'firebase/firestore';
    import { doc, updateDoc } from 'firebase/firestore';
    import { computed } from 'vue';

    // Gets this month
    const thisMonth = (d: number, h?: number, m?: number): Date => {
	    const t = new Date()
	    return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
    }

    interface IExampleState {
        showDate: Date
        message: string
        startingDayOfWeek: number
        disablePast: boolean
        disableFuture: boolean
        displayPeriodUom: string
        displayPeriodCount: number
        displayWeekNumbers: boolean
        showTimes: boolean
        selectionStart?: Date
        selectionEnd?: Date
        newItemTitle: string
        newItemStartDate: string
        newItemEndDate: string
        newItemColor: string
        useDefaultTheme: boolean
        useHolidayTheme: boolean
        useTodayIcons: boolean
        items: ICalendarItem[]
    }

    const state = reactive({
        /* Show the current month, and give it some fake items to show */
        showDate: thisMonth(1),
        message: "",
        startingDayOfWeek: 0,
        disablePast: false,
        disableFuture: false,
        displayPeriodUom: "month",
        displayPeriodCount: 1,
        displayWeekNumbers: false,
        showTimes: true,
        selectionStart: undefined,
        selectionEnd: undefined,
        newItemTitle: "",
        newItemStartDate: "",
        newItemEndDate: "",
        newItemColor: "",
        useDefaultTheme: false,
        useHolidayTheme: true,
        useTodayIcons: false,
        items: [],
    } as IExampleState)

    const setShowDate = (d: Date): void => {
	    state.message = `Changing calendar view to ${d.toLocaleDateString()}`
	    state.showDate = d
    }

    // Mount items with start and end dates on calendar
    onMounted((): void => {
	    state.newItemStartDate = CalendarMath.isoYearMonthDay(CalendarMath.today())
	    state.newItemEndDate = CalendarMath.isoYearMonthDay(CalendarMath.today())
    })

    // Test function to add items to calendar
    const clickTestAddItem = (): void => {
        state.items.push({
            startDate: CalendarMath.fromIsoStringToLocalDate(state.newItemStartDate),
            endDate: CalendarMath.fromIsoStringToLocalDate(state.newItemEndDate),
            title: state.newItemTitle,
            id: "e" + Math.random().toString(36).substring(2, 11),
            //color: "#ff0000"
        })
	state.message = "You added a calendar item!"
    }
/*
    const deleteItemById = (id: string): void => {
        state.items = state.items.filter((item: ICalendarItem): boolean => item.id !== id)
    }
*/
    // For moving items around on calendar (check if its needed)
    const onDrop = async (item: INormalizedCalendarItem, date: Date): Promise<void> => {
        console.log("Dropped item:", item);
        state.message = `You dropped ${item.id} on ${date.toLocaleDateString()}`
        const eLength = CalendarMath.dayDiff(item.startDate, date)
        item.originalItem.startDate = CalendarMath.addDays(item.startDate, eLength)
        item.originalItem.endDate = CalendarMath.addDays(item.endDate, eLength)

        const firebaseConfig = {
            apiKey: "AIzaSyBPB1jmwH-3h1YmBAkkekTF8eDto4pfo9c",
            authDomain: "workwise-b1604.firebaseapp.com",
            projectId: "workwise-b1604",
            storageBucket: "workwise-b1604.appspot.com",
            messagingSenderId: "218806215802",
            appId: "1:218806215802:web:258458dab46639a66e07c3"
        };
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // Update task in 'tasks' collection
        const taskRef = doc(db, 'tasks', item.id);
        await updateDoc(taskRef, {
            startDate: item.originalItem.startDate,
            endDate: item.originalItem.endDate,
        });
        console.log("Task updated in tasks collection:", item.id);

        // Update task in tasks sub-collection within the 'lists' collection
        const listsRef = collection(db, 'lists');
        const listSnapshot = await getDocs(listsRef);

        listSnapshot.forEach(async (docSnapshot) => {
            const listID = docSnapshot.id;

            // Get the tasks sub-collection reference
            const tasksCollectionRef = collection(db, 'lists', listID, 'tasks');

            // Get the task document with the matching item.id
            const taskSnapshot = await getDocs(tasksCollectionRef);
            let taskID;
            taskSnapshot.forEach((doc) => {
                if (doc.id === item.id) {
                    console.log("MATCH FOUND")
                    taskID = doc.id;
                }
            });

            // If the task is found, update the task in the sub-collection
            if (taskID) {
                const taskRef = doc(db, 'lists', listID, 'tasks', taskID);
                await updateDoc(taskRef, {
                    startDate: item.originalItem.startDate,
                    endDate: item.originalItem.endDate,
                });
                console.log(`Task updated in list ${listID}:`, item.id);
            }
        });
    }

    const fetchTasks = async (projectID: string): Promise<ICalendarItem[]> => {
        const firebaseConfig = {
                    apiKey: "AIzaSyBPB1jmwH-3h1YmBAkkekTF8eDto4pfo9c",
                    authDomain: "workwise-b1604.firebaseapp.com",
                    projectId: "workwise-b1604",
                    storageBucket: "workwise-b1604.appspot.com",
                    messagingSenderId: "218806215802",
                    appId: "1:218806215802:web:258458dab46639a66e07c3"
        };
    console.log("In fetch tasks");

    // Initialize the Firebase app and get the Firestore database reference
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Fetch lists that are part of the given project
    const listsRef = collection(db, 'lists');
    const listSnapshot = await getDocs(listsRef);
    const projectListIDs: string[] = [];

    listSnapshot.forEach((doc) => {
        const listData = doc.data();
        if (listData.projID === projectID) {
            projectListIDs.push(doc.id);
        }
    });

    // Fetch tasks that belong to lists in the given project
    const tasksRef = collection(db, 'tasks');
    const taskSnapshot = await getDocs(tasksRef);
    const tasks: ICalendarItem[] = [];

    taskSnapshot.forEach((doc) => {
        //console.log("In task snapshot");
        const taskData = doc.data();
        if (taskData.listID && projectListIDs.includes(taskData.listID)) {
            tasks.push({
                id: doc.id,
                title: taskData.taskName,
                startDate: taskData.endDate.toDate(),
                endDate: taskData.endDate.toDate(),
                color: taskData.cardColor
            });
        }
        //console.log(tasks);
    });

        return tasks;
    };

    onMounted(async () => {
    //console.log("IN MOUNTED")
    const route = useRoute();
    const projID = route.params.projID as string;
    //console.log(typeof projID);
    //console.log(projID)

        if (projID) {
            state.items = await fetchTasks(projID);
        }
    });

    // to setup for the task colors
    const itemClasses = (item: ICalendarItem): string[] => {
        console.log(item);
        const classes = ['rounded-border']; // Add the custom class here
        if (item && item.color) {
            classes.push(`bg-color-${item.color.replace('#', '')}`)
            console.log("colors found!")
        } else {
            console.log(`No color found for item ${item}`);
        }
        return classes;
    }

    const itemStyles = (item: ICalendarItem): string => {
        const bgColor = item.color ? `background-color: ${item.color};` : '';
        const borderRadius = 'border-radius: 8%;';
        const paddingTop = 'padding-top: 0.1em';
        const textAlign = 'text-align: center';
        return `${bgColor} ${borderRadius} ${paddingTop} ${textAlign}`;
    };

    const itemsWithColor = computed(() => {
        return state.items.map(item => {
            return {
                ...item,
                style: itemStyles(item),
            };
        });
    });
</script>

<script lang="ts">
    import { getFirestore, collection} from 'firebase/firestore';
    import { initializeApp } from "firebase/app";
    import { useRoute } from "vue-router";

    export default {
        name: 'Calendar',
        props: {
            addItems: Boolean,
        },
        data() {
            return {
                title: 'Test Title'
            }
        },
        components: {
            Sidebar
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

    .flex-column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .calendar-header h1 {
        font-size: 2em;
        padding-top: 1.2em;
        padding-bottom: 0.5em;
        font-family: 'Josefin Sans', sans-serif;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    #calendar-body {
        width: 55vw;
        height: 85vh;
    }

    #add-item {
        padding-left: 5vw;
    }

    .cv-header {
        background: none !important;
        border: none !important;
        display: flex;
        flex-direction: row-reverse;
        justify-content: left;
        font-family: 'Josefin Sans', sans-serif;
    }

    .currentPeriod {
        font-size: 0 !important;
    }

    .cv-header-days {
        border-width: 0 !important;
        font-family: 'Josefin Sans', sans-serif;
    }

    .cv-header-day {
        background: none !important;
        border: none !important;    }

    .dow0.cv-header-day {
        border: none !important;
    }

    .cv-weeks {
        font-family: Cambria;
    }

    #users img {
        height: 7vh;
        width: 9vh;
    }

    #users {
        padding-bottom: 3em;
    }

    #users h1 {
        padding-bottom: 1em;
        font-size: larger;
    }

    #users-rows {
        padding-bottom: 1em;
    }

    #add-users a:link {
        text-decoration: none;
    }

    .previousYear, .previousPeriod, .currentPeriod, .nextPeriod, .nextYear {
        background: none !important;
        border: none !important;
    }

    .previousYear:hover, .previousPeriod:hover, .currentPeriod:hover, .nextPeriod:hover, .nextYear:hover {
        cursor: pointer;
    }

    .cv-day.past {
        background-color: none;
    }

    .cv-day.today .cv-day-number{
        background-color: pink;
        border-radius: 50%;
        margin-left: 0.1em;
        margin-top: 0.1em;
    }

    .cv-day.outsideOfMonth {
        background-color: #f7f7f7 !important;
    }

    .calendar-item {
        padding: 3px;
        border-radius: 3px;
        color: white;
    }

    .rounded-border {
        border-radius: 50% !important; 
    }
</style>