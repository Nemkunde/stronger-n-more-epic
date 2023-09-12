import React from "react";
import { useState, useEffect } from "react";
import PopUpComponent from "./abstracts/PopUpComponent";
import { Activity } from "../types/Activity";

type CardProps = {
  title: string;
  time: string;
  description: string;
  coach: string;
  day: string;
};

type BookingProps = {
  title: string;
  time: string;
  day: string;
};

const Card = ({ title, time, description, coach, day }: CardProps) => {
  const [activePopup, setActivePopup] = useState("");
  const [confirmPopup, setConfirmPopup] = useState("");
  const [color, setColor] = useState("orange");
  const [isBooked, setIsBooked] = useState(false);

  const handleClick: React.MouseEventHandler = (e) => {
    setActivePopup("SelectClass");
  };

  const handleOKClick = () => {
    setActivePopup("");
    setConfirmPopup("ConfirmClass");
  };

  const handleCancelClick = () => {
    window.location.reload();
    setActivePopup("");
  };

  const handleBooking = async ({ title, day, time }: BookingProps) => {
    try {
      const res = await fetch("api/user/booking", {
        method: "POST",
        body: JSON.stringify({ title, day, time }),
      });
      const json = await res.json;
      console.log(title);
    } catch (err) {
      console.log(err);
    }
    setConfirmPopup("");
    setColor("rgb(24,156,245)");
  };

  return (
    <div>
      <div className="card" style={{width: "9rem", margin: ".2em .2em -0.2em .2em"}}>
    
  <div className="card-body">
    <h6 className="card-title">{title}</h6>
    <p className="card-text">{time}</p>
    <button className="btn btn-primary" onClick={handleClick}>Book</button>
  </div>
</div>
      <div>
        {activePopup === "SelectClass" && (
          <PopUpComponent
            onOkClick={handleOKClick}
            onCancelClick={handleCancelClick}
            insertText={
              <div>
                <h3>{title}</h3>
                <p>Starts: {time} - be 10min early.</p>
                <p>Coach: {coach}</p>
                <p>{description}</p>
              </div>
            }
          />
        )}
      </div>
      <div>
        {confirmPopup === "ConfirmClass" && (
          <PopUpComponent
            onOkClick={() => handleBooking({ title: title, day: day, time: time })}
            onCancelClick={handleCancelClick}
            insertText={
              <div>
                <p>You have now booked</p>
                <h3>{title}</h3>
                <p>
                  at {time} on {day}.
                </p>
                <h4>Welcome!</h4>
              </div>
            }
          />
        )}
      </div>
    </div>
  );
};

export default Card;