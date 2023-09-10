import React from "react";
import { useState } from "react";
import styled from "styled-components";
import PopUpComponent from "./PopUpComponent";

type CardProps = {
  title: string;
  date: string;
  time: string;
};

const Card = ({ title, date, time }: CardProps) => {
  const [activePopup, setActivePopup] = useState("");
  const [confirmPopup, setConfirmPopup] = useState("");
  const [color, setColor] = useState("orange");

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
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

  const BookSession = () => {
    //functionality for getting the info into user.activites
    setColor("lightgreen");
    setConfirmPopup("");
  };

  return (
    <div>
      <div
        key={title}
        style={{
          width: "100px",
          height: "100px",
          background: color,
          padding: "5px",
          textAlign: "center",
          borderRadius: "7px",
          fontSize: "0.8rem",
          boxShadow: "2px 2px 2px gray",
        }}>
        <div>
          {activePopup === "SelectClass" && (
            <PopUpComponent
              onOkClick={handleOKClick}
              onCancelClick={handleCancelClick}
              insertText={
                "You are now booking " + title + ". Do you want to continue?"
              }
            />
          )}
        </div>
        <div onClick={handleClick}>
          <p style={{ fontWeight: "bold" }}>{title}</p>
          <p>{date}</p>
          <p>{time}</p>
        </div>
      </div>
      <div>
        {confirmPopup === "ConfirmClass" && (
          <PopUpComponent
            onOkClick={BookSession}
            onCancelClick={handleCancelClick}
            insertText={
              "You have now booked " +
              title +
              " on " +
              date +
              " at " +
              time +
              "."
            }
          />
        )}
      </div>
    </div>
  );
};

export default Card;
