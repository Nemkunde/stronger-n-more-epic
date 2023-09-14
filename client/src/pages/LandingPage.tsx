import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import background from "../assets/bg-gym.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <>
      <Header btnText={"Login"} />
      <div
        style={{
          height: "68.5vh",
          width: "50%",
          textAlign: "center",
        }}>
        <img
          src={background}
          alt=""
          style={{ width: "100vw", marginTop: "1.3em" }}
        />
        <div
          style={{
            background: "white",
            width: "300px",
            height: "225px",
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "1em",
            borderRadius: "6px",
          }}>
          <h1>Welcome to Strong n' Epics</h1>
          <p>Join our gym chain and get fit!</p>
          <button className="btn btn-primary" onClick={handleClick}>
            To membership
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
