// @ts-check

import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddActivityComponent from "../components/AddActivityComponent";
import { Activity } from "../types/Activity";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PopUpComponent from "../components/abstracts/PopUpComponent";

const AdminPage = () => {
  const navigate = useNavigate();

  const [showPopUp, setShowPopUp] = useState<boolean>(false); // ts update: boolean

  const handleAddActivity = async (activity: Activity) => {
    try {
      const response = await fetch("api/admin/activities", {
        method: "POST",
        body: JSON.stringify(activity),
      });

      if (response.status === 201) {
        setShowPopUp(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const closePopUp = () => {
    setShowPopUp(false);
  };
  return (
    <div className="container">
      <Header btnText={"Log Out"} />

      <div className="my-3">
        <Link to="/admin/activity" className="btn btn-primary me-2">
          Gym Activities
        </Link>
        <Link to="/admin/user" className="btn btn-primary">
          Members
        </Link>
      </div>

      <AddActivityComponent addActivity={handleAddActivity} />
      <Footer />

      {showPopUp && (
        <PopUpComponent
          insertText={"You have successfully added an activity!"}
          onOkClick={() => navigate("/admin/activity")}
          onCancelClick={closePopUp}
        />
      )}
    </div>
  );
};

export default AdminPage;