import { time } from "console";
import { createServer } from "mirage";

export default function MirageServer() {
    createServer(
        {
            routes() {
                this.get("api/customers", () => ({
                    customers: [
                        { id: 1, name: "Jane Doe", userID: Math.Floor(Math.Random) * 9000, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
                        { id: 2, name: "Jane Doe", userID: Math.Floor(Math.Random) * 9000, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
                        { id: 3, name: "Jane Doe", userID: Math.Floor(Math.Random) * 9000, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
                        { id: 4, name: "Jane Doe", userID: Math.Floor(Math.Random) * 9000, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
                        { id: 5, name: "Jane Doe", userID: Math.Floor(Math.Random) * 9000, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
                        { id: 6, name: "Jane Doe", userID: Math.Floor(Math.Random) * 9000, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
                        { id: 7, name: "Jane Doe", userID: Math.Floor(Math.Random) * 9000, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
                        { id: 8, name: "Jane Doe", userID: Math.Floor(Math.Random) * 9000, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
                        { id: 9, name: "Jane Doe", userID: Math.Floor(Math.Random) * 9000, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
                        { id: 10, name: "Jane Doe", userID: Math.Floor(Math.Random) * 9000, ContactInfo: "janedoe@mail.com", passDetails: [{ pass: "Calming Yoga" }, { pass: "Group Training" }] },
                    ],
                }))
                this.get("api/passes", () => ({
                    passes: [
                        { pass: "Calming Yoga", date: { year: "2023", month: "08", day: "19" }, time: "9.30 AM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
                        { pass: "Group Training", date: { year: "2023", month: "08", day: "19" }, time: "10.50 AM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
                        { pass: "Cardio", date: { year: "2023", month: "08", day: "19" }, time: "1.30 PM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
                        { pass: "Advanced Yoga", date: { year: "2023", month: "08", day: "20" }, time: "11 AM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
                        { pass: "Boxing", date: { year: "2023", month: "08", day: "21" }, time: "5.15 PM", coach: "Strongy McStrong", description: "Random text about the exercise, location and such." },
                    ]
                }))
            }
        }
    )
}