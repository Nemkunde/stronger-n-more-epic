import React from "react";

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
];

const CalenderComponent = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <p style={{ textAlign: "center" }}>Mon</p>
          {passes.map((pass) =>
            pass.day === "monday" ? (
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
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <p style={{ textAlign: "center" }}>Tues</p>
          {passes.map((pass) =>
            pass.day === "tuesday" ? (
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
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <p style={{ textAlign: "center" }}>Wed</p>
          {passes.map((pass) =>
            pass.day === "wednesday" ? (
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
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <p style={{ textAlign: "center" }}>Thur</p>
          {passes.map((pass) =>
            pass.day === "thursday" ? (
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
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <p style={{ textAlign: "center" }}>Fri</p>
          {passes.map((pass) =>
            pass.day === "friday" ? (
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
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <p style={{ textAlign: "center" }}>Sat</p>
          {passes.map((pass) =>
            pass.day === "saturday" ? (
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
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <p style={{ textAlign: "center" }}>Sun</p>
          {passes.map((pass) =>
            pass.day === "sunday" ? (
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
      </div>
    </div>
  );
};

export default CalenderComponent;
