export default function exportPasses() {
    const generateID = () => {
        let ID = Math.floor(Math.random() * 100000);
        return ID.toString();
    }

    const passes = [
        {
            ID: generateID(),
            pass: "Calming Yoga",
            day: "monday",
            date: "20230819",
            time: "9.30 AM",
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
        },
        {
            ID: generateID(),
            pass: "Group Training",
            day: "sunday",
            date: "20230819",
            time: "10.50 AM",
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
        },
        {
            ID: generateID(),
            pass: "Cardio",
            day: "thursday",
            date: "20230819",
            time: "1.30 PM",
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
        },
        {
            ID: generateID(),
            pass: "Advanced Yoga",
            day: "monday",
            date: "20230819",
            time: "11 AM",
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
        },
        {
            ID: generateID(),
            pass: "Boxing",
            day: "wednesday",
            date: "20230819",
            time: "5.15 PM",
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
        },
        {
            ID: generateID(),
            pass: "Boxing",
            day: "saturday",
            date: "20230819",
            time: "5.15 PM",
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
        },
        {
            ID: generateID(),
            pass: "Yoga",
            day: "saturday",
            date: "20230819",
            time: "5.15 PM",
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
        },
        {
            ID: generateID(),
            pass: "Swimming",
            day: "saturday",
            date: "20230819",
            time: "5.15 PM",
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
        },
        {
            ID: generateID(),
            pass: "Boxing",
            day: "friday",
            date: "20230819",
            time: "5.15 PM",
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
        },
        {
            ID: generateID(),
            pass: "Boxing",
            day: "tuesday",
            date: "20230819",
            time: "5.15 PM",
            coach: "Strongy McStrong",
            description: "Random text about the exercise, location and such.",
        },
    ];
    return passes
}