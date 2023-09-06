import React from "react";

const passes = [
  {
    pass: "Calming Yoga",
    date: "20230819",
    time: "9.30 AM",
    coach: "Strongy McStrong",
    description: "Random text about the exercise, location and such.",
  },
  {
    pass: "Group Training",
    date: "20230819",
    time: "10.50 AM",
    coach: "Strongy McStrong",
    description: "Random text about the exercise, location and such.",
  },
  {
    pass: "Cardio",
    date: "20230819",
    time: "1.30 PM",
    coach: "Strongy McStrong",
    description: "Random text about the exercise, location and such.",
  },
  {
    pass: "Advanced Yoga",
    date: "20230819",
    time: "11 AM",
    coach: "Strongy McStrong",
    description: "Random text about the exercise, location and such.",
  },
  {
    pass: "Boxing",
    date: "20230819",
    time: "5.15 PM",
    coach: "Strongy McStrong",
    description: "Random text about the exercise, location and such.",
  },
];

const CalenderComponent = () => {
  return <div style={{ position: "absolute",  left: "2em", right: "2em", display:"flex", flexDirection: "column", gap: "5px"}}>
    {passes.map(pass => (
        <div style={{width: "150px", background: "orange", padding: "5px", textAlign: "center", borderRadius: "7px"}}>
        <p key={pass.pass}>{pass.pass}</p>
        <p>{pass.date}</p>
        <p>{pass.time}</p>
        </div>
        
    ))}
  </div>;
};

export default CalenderComponent;
