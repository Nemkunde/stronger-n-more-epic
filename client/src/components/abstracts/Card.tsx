import React from "react";
import { useState } from "react";
import PopUpComponent from "./PopUpComponent";

type CardProps = {
  passID: string;
  pass: string;
  date: string;
  time: string;
};

const Card = ({ passID, pass, date, time }: CardProps) => {
  const [activePopup, setActivePopup] = useState("");

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setActivePopup("SelectPass");
  };

  const handleOKClick = () => {
    setActivePopup("");
    console.log("hello");
  };

  const handleCancelClick = () => {
    window.location.reload();
    setActivePopup("");
  };

  return (
    <div>
      <div
        key={passID}
        style={{
          width: "100px",
          height: "100px",
          background: "orange",
          padding: "5px",
          textAlign: "center",
          borderRadius: "7px",
          fontSize: "0.8rem",
        }}>
        <div>
          {"SelectPass"
            ? activePopup === "SelectPass" && (
                <PopUpComponent
                  onOkClick={handleOKClick}
                  onCancelClick={handleCancelClick}
                  insertText={
                    "You are now booking " + pass + ". Do you want to continue?"
                  }
                />
              )
            : ""}
        </div>
        <div onClick={handleClick}>
          <p style={{ fontWeight: "bold" }}>{pass}</p>
          <p>{date}</p>
          <p>{time}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
