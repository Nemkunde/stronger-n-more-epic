// import { createServer, Model } from "miragejs";

// createServer({
//     models: {
//         user: Model,
//         activity: Model,
//     },

//     routes() {
//         this.namespace = "api";

//         this.get("/admin/users", (schema, request) => {
//             return schema.users.all();
//         });

//         this.get("/admin/activities", (schema, request) => {
//             return schema.activities.all();
//         });

//         this.post("/users", (schema, request) => {
//             let attrs = JSON.parse(request.requestBody);
//             return schema.users.create(attrs);
//         });

//         this.post("/admin/activities", (schema, request) => {
//             let attrs = JSON.parse(request.requestBody);
//             return schema.activities.create(attrs);
//         });

//         this.delete("/admin/activities/:id", (schema, request) => {
//             let id = request.params.id;
//             return schema.activities.find(id).destroy();
//         });

//         this.post("/auth/login", (schema, request) => {
//             const { username, password } = JSON.parse(request.requestBody);
//             const user = schema.users.findBy({ username, password });

//             if (user) {
//                 // Return user data with role
//                 return { user };
//             } else {
//                 return new Response(
//                     400,
//                     { some: "reader" },
//                     { error: ["username and password combined not exist!"] }
//                 );
//             }
//         });
//     },

//     seeds(server) {
//         server.create("user", { id: 1, username: "Bob", role: "ADMIN", password: "123" });
//         server.create("user", {
//             id: 2,
//             username: "Adam",
//             role: "USER",
//             password: "123",
//             activities: ["boxing", "yoga"],
//         });
//         server.create("user", {
//             id: 3,
//             username: "Yves",
//             role: "USER",
//             password: "123",
//             activities: ["spinning", "bicycle", "yoga"],
//         });

//         server.create("activity", {
//             id: 1,
//             title: "boxing",
//             coach: "Erik Eriksson",
//             day: "Monday",
//             created: "20230907",
//             time: "18:00",
//             description: "an amazing activity for you who wants to become strong",
//         });
//         server.create("activity", {
//             id: 2,
//             title: "yoga",
//             coach: "Emelie Johansson",
//             day: "Tuesday",
//             created: "20230910",
//             time: "15:00",
//             description: "an amazing activity for you who wants to relax",
//         });
//         server.create("activity", {
//             id: 3,
//             title: "spinning bicycle",
//             coach: "Ulf Andersson",
//             day: "Wednesday",
//             created: "20230907",
//             time: "18:00",
//             description: "an amazing activity for you who wants to become strong",
//         });
//     },
// });

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
            users[1].activities?.push(attrs);
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