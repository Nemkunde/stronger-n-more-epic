import React from 'react'
const passes = [
    {
      pass: "Calming Yoga",
      day: "monday",
      date: "20230819",
      time: "9.30 AM",
      coach: "Strongy McStrong",
      description: "Random text about the exercise, location and such.",
    },
    {
      pass: "Group Training",
      day: "sunday",
      date: "20230819",
      time: "10.50 AM",
      coach: "Strongy McStrong",
      description: "Random text about the exercise, location and such.",
    },
    {
      pass: "Cardio",
      day: "monday",
      date: "20230819",
      time: "1.30 PM",
      coach: "Strongy McStrong",
      description: "Random text about the exercise, location and such.",
    },
    {
      pass: "Advanced Yoga",
      day: "monday",
      date: "20230819",
      time: "11 AM",
      coach: "Strongy McStrong",
      description: "Random text about the exercise, location and such.",
    },
    {
      pass: "Boxing",
      day: "wednesday",
      date: "20230819",
      time: "5.15 PM",
      coach: "Strongy McStrong",
      description: "Random text about the exercise, location and such.",
    },
    {
        pass: "Boxing",
        day: "saturday",
        date: "20230819",
        time: "5.15 PM",
        coach: "Strongy McStrong",
        description: "Random text about the exercise, location and such.",
      },
      {
        pass: "Yoga",
        day: "saturday",
        date: "20230819",
        time: "5.15 PM",
        coach: "Strongy McStrong",
        description: "Random text about the exercise, location and such.",
      },
      {
        pass: "Swimming",
        day: "saturday",
        date: "20230819",
        time: "5.15 PM",
        coach: "Strongy McStrong",
        description: "Random text about the exercise, location and such.",
      },
      {
        pass: "Boxing",
        day: "friday",
        date: "20230819",
        time: "5.15 PM",
        coach: "Strongy McStrong",
        description: "Random text about the exercise, location and such.",
      },
  ];

type DayProps = {
    dayText: string, 
    dayString: string
}

const GridCard = ({dayText, dayString}: DayProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <p style={{ textAlign: "center" }}>{dayText}</p>
          {passes.map((pass) =>
            pass.day === dayString ? (
              <div
                key={pass.day}
                style={{
                  width: "100%",
                  background: "orange",
                  padding: "5px",
                  textAlign: "center",
                  borderRadius: "7px",
                }}>
                <p>{pass.pass}</p>
                <p>{pass.date}</p>
                <p>{pass.time}</p>
              </div>
            ) : (
              ""
            )
          )}
        </div>
  )
}

export default GridCard
