<template>
    <div id="calendar-display" class="flex-column">
        <div class="calendar-header">
            <h1>ProjectName tasks</h1>
        </div>
        <sidebar />

        <div id="calendar-body" class="flex-row">
            <div id="calendar-proper">
                <calendar-view
                    :items="state.items"
                    :enable-drag-drop="true"
                    @drop-on-date="onDrop"
                    :show-date="state.showDate"
                    :show-month="true"
                    :show-weekday="true"
                    :show-week-numbers="true"
                    :disablePast = "true"
                    class = "theme-default holiday-us-traditional holiday-us-official"
                    id = "calendar-body">
                    <template #header="{ headerProps }">
                            <CalendarViewHeader :header-props="headerProps" @input="setShowDate" />
                    </template>
                </calendar-view> 
            </div>
            
            <div class="box" id="add-item">
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
    import { defineComponent } from 'vue';

    import { 
        CalendarView, 
        CalendarViewHeader,
        CalendarMath
    } from "vue-simple-calendar"

    import {
        ICalendarItem,
        INormalizedCalendarItem,
    } from "./CalendarFiles/ICalendarItem"

    import {
        onMounted,
        reactive,
        computed
    } from "vue"

    import "../../node_modules/vue-simple-calendar/dist/style.css"
    // The next two lines are optional themes
    import "../../node_modules/vue-simple-calendar/dist/css/default.css"
    import "../../node_modules/vue-simple-calendar/dist/css/holidays-us.css"
    import "./CalendarFiles/CalendarViewHeader.vue"
    //import { Sidebar } from "./Sidebar.vue"


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
        newItemColor:"",
        useDefaultTheme: true,
        useHolidayTheme: true,
        useTodayIcons: false,
        items: [
            /*{
                id: "e0",
                startDate: "2018-01-05",
            },*/

        ],
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
            color: "#ff0000"
        })
	state.message = "You added a calendar item!"
    }

    const deleteItemById = (id: string): void => {
        state.items = state.items.filter((item: ICalendarItem): boolean => item.id !== id)
    }

    // For moving items around on calendar (check if its needed)
    const onDrop = (item: INormalizedCalendarItem, date: Date): void => {
        state.message = `You dropped ${item.id} on ${date.toLocaleDateString()}`
        // Determine the delta between the old start date and the date chosen,
        // and apply that delta to both the start and end date to move the item.
        const eLength = CalendarMath.dayDiff(item.startDate, date)
        item.originalItem.startDate = CalendarMath.addDays(item.startDate, eLength)
        item.originalItem.endDate = CalendarMath.addDays(item.endDate, eLength)
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');

    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
	    display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    #app {
        height: 100vh;
        width: 100vw;
        font-family: 'Josefin Sans', sans-serif;

    }

    .flex-column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .calendar-header h1 {
        font-size: 2em;
        padding: 0.5em;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    #calendar-body {
        width: 35vw;
        height: 65vh;
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
    }

    .currentPeriod {
        font-size: 0 !important;
    }

    .previousYear, .previousPeriod, .currentPeriod, .nextPeriod, .nextYear {
        background: none !important;
        border: none !important;
    }

    .cv-header-days {
        border-width: 0 !important;
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
</style>