import { createServer } from "miragejs";

let users = [
    { id: 1, username: "Adam", role: "USER", password: "123" },
    { id: 2, username: "Bob", role: "ADMIN", password: "123" },
];

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

        this.get("/users", () => {
            return users;
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
