import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CalenderComponent from "../components/CalenderComponent";
import { useState } from "react";
import MyBookingsComponent from "../components/MyBookingsComponent";
import { User } from '../types/Users';

const UserBookingPage = () => {
  const [showBookings, setShowBookings] = useState(true);
  const [activities, setActivities] = useState<User[]>([]);
  const [newArray, setNewArray] = useState<string[]>([]);

  const handleBookingClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setShowBookings(false);
    getBookings();
  };

  const closeWindow: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setShowBookings(true);
  }

  const getBookings = () => {
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((json) => setActivities(json.users))
      .catch((err) => console.log(err));

    const key = "username";
    const user = localStorage.getItem(key);

    activities.map((activity) => {
      if (user === activity.username) {
        console.log(activity.activities);
        if (activity.activities !== undefined) {
          const session = activity.activities;
          setNewArray(session);
          console.log(newArray);
        }
        // setNewArray(session);
      }
    });
  }
  

  return (
    <div>
      <Header btnText={"Logout"} />
      <div className="container">
        <div className="my-3 btn btn-primary me-2" onClick={handleBookingClick}>
          My bookings
        </div>
        <div onClick={closeWindow}>
        {showBookings === false && <MyBookingsComponent setActivites={newArray}/> }
        </div>
      </div>
      <CalenderComponent />
      <Footer />
    </div>
  );
};

export default UserBookingPage;
