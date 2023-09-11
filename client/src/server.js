import { createServer } from "miragejs";

let users = [
    { id: 1, username: "Bob", role: "ADMIN", password: "123" },
    { id: 2, username: "Adam", role: "USER", password: "123", activities: ["boxing", ""] },
    {
        id: 3,
        username: "Yves",
        role: "USER",
        password: "123",
        activities: ["spinning bicycle", "yoga"],
    },
];

let activities = [
    {
        id: 1,
        title: "Boxing",
        coach: "Erik Eriksson",
        day: "Monday",
        date: "20230907",
        time: "07:00",
        description: "an amazing activity for you who wants to become strong",
    },

    {
        id: 2,
        title: "Yoga",
        coach: "Emelie Johansson",
        day: "Tuesday",
        date: "20230910",
        time: "15:00",
        description: "an amazing activity for you who wants to relax",
    },
    {
        id: 3,
        title: "Spinning",
        coach: "Ulf Andersson",
        day: "Wednesday",
        date: "20230907",
        time: "18:00",
        description: "an amazing activity for you who wants to become strong",
    },
    {
        id: 4,
        title: "Calming Yoga",
        coach: "Strongy McStrong",
        day: "Monday",
        date: "20230819",
        time: "09:30",
        description: "Random text about the exercise, location and such.",
    },
    {
        id: 5,
        title: "Cardio",
        day: "Sunday",
        date: "20230819",
        time: "14:00",
        coach: "Strongy McStrong",
        description: "Random text about the exercise, location and such.",
    },
    {
        id: 6,
        title: "Cardio",
        day: "Thursday",
        date: "20230819",
        time: "13:30",
        coach: "Strongy McStrong",
        description: "Random text about the exercise, location and such.",
    },
    {
        id: 7,
        title: "Karma Yoga",
        day: "Monday",
        date: "20230819",
        time: "11:00",
        coach: "Strongy McStrong",
        description: "Random text about the exercise, location and such.",
    },
    {
        id: 8,
        title: "Boxing",
        day: "Wednesday",
        date: "20230819",
        time: "17:15",
        coach: "Strongy McStrong",
        description: "Random text about the exercise, location and such.",
    },
    {
        id: 9,
        title: "Boxing",
        day: "Saturday",
        date: "20230819",
        time: "17:15",
        coach: "Strongy McStrong",
        description: "Random text about the exercise, location and such.",
    },
    {
        id: 10,
        title: "Yoga",
        day: "Saturday",
        date: "20230819",
        time: "18:15",
        coach: "Strongy McStrong",
        description: "Random text about the exercise, location and such.",
    },
    {
        id: 11,
        title: "Swimming",
        day: "Saturday",
        date: "20230819",
        time: "19:00",
        coach: "Strongy McStrong",
        description: "Random text about the exercise, location and such.",
    },
    {
        id: 12,
        title: "Boxing",
        day: "Friday",
        date: "20230819",
        time: "17:15",
        coach: "Strongy McStrong",
        description: "Random text about the exercise, location and such.",
    },
    {
        id: 13,
        title: "Boxing",
        day: "Tuesday",
        date: "20230819",
        time: "17:15",
        coach: "Strongy McStrong",
        description: "Random text about the exercise, location and such.",
    },
];
console.log(activities);

createServer({
    routes() {
        this.namespace = "api";

        // Responding to a POST request
        this.post("/users", (schema, request) => {
            let attrs = JSON.parse(request.requestBody);
            attrs.id = Math.floor(Math.random() * 100);

            users.push(attrs);

            return { user: attrs };
        });

        this.post("/admin/activity", (schema, request) => {
            let attrs = JSON.parse(request.requestBody);
            attrs.id = Math.floor(Math.random() * 100);

            activities.push(attrs);
            console.log(activities);
            return { activity: attrs };
        });

        this.post("/user/booking", (schema, request) => {
            let attrs = JSON.parse(request.requestBody);
            console.log(attrs);
            users.activities?.push(attrs);
            console.log(users)
            return { activity: attrs }
        })

        this.get("/user/booking", () => {
            console.log(users)
            return users;
        })

        this.get("/admin/users", () => {
            return users;
        });

        this.get("/admin/activities", () => {
            return activities;
        });
    },
});



// import { createServer } from "miragejs";

// function setID() {
//     return Math.floor(Math.random() * 9000);
// }


// createServer(
//     {
//         routes() {
//             this.urlPrefix = 'http://localhost:3000';
//             this.namespace = "api"
//             this.get("api/customers", () => ({
//                 customers: [
//                     { id: 1, name: "Jane Doe", userID: setID, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
//                     { id: 2, name: "Anna Doe", userID: setID, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
//                     { id: 3, name: "Bob Doe", userID: setID, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
//                     { id: 4, name: "Cathy Doe", userID: setID, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
//                     { id: 5, name: "Diana Doe", userID: setID, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
//                     { id: 6, name: "Erik Doe", userID: setID, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
//                     { id: 7, name: "Frej Doe", userID: setID, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
//                     { id: 8, name: "Gustav Doe", userID: setID, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
//                     { id: 9, name: "Harry Doe", userID: setID, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
//                     { id: 10, name: "Indiana Jones", userID: setID, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
//                 ],
//             }))
//             this.get("api/passes", () => {
//                 return {
//                     passes: [
//                         { pass: "Calming Yoga", date: { year: "2023", month: "08", day: "19" }, time: "9.30 AM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
//                         { pass: "Group Training", date: { year: "2023", month: "08", day: "19" }, time: "10.50 AM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
//                         { pass: "Cardio", date: { year: "2023", month: "08", day: "19" }, time: "1.30 PM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
//                         { pass: "Advanced Yoga", date: { year: "2023", month: "08", day: "20" }, time: "11 AM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
//                         { pass: "Boxing", date: { year: "2023", month: "08", day: "21" }, time: "5.15 PM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
//                         { pass: "Calming Yoga", date: { year: "2023", month: "08", day: "21" }, time: "9.30 AM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
//                         { pass: "Group Training", date: { year: "2023", month: "08", day: "22" }, time: "10.50 AM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
//                         { pass: "Cardio", date: { year: "2023", month: "08", day: "23" }, time: "1.30 PM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
//                         { pass: "Advanced Yoga", date: { year: "2023", month: "08", day: "23" }, time: "11 AM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
//                         { pass: "Boxing", date: { year: "2023", month: "08", day: "23" }, time: "5.15 PM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
//                     ]
//                 }
//             })
//             this.passthrough();
//             this.passthrough('main.b02937e5f279c5ea7e2c.hot-update.json');
//         }
//     }
// )
