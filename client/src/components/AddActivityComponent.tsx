import React, { useState, ChangeEvent, FormEvent } from "react";
import { Activity } from "../types/Activity";
import InputComponent from "./abstracts/InputComponent";

interface AddActivityProps {
  addActivity: (activity: Activity) => void;
}

const AddActivityComponent: React.FC<AddActivityProps> = ({ addActivity }) => {
  const initialActivity: Activity = {
    id: 0,
    title: "",
    coach: "",
    day: "Monday",
    created: "",
    time: "",
    description: "",
  };
  const [activity, setActivity] = useState<Activity>(initialActivity);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addActivity(activity);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleReset = (): void => {
    setActivity(initialActivity);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-5">Add Activity</h3>
      <form onSubmit={submitHandler}>
        <InputComponent
          label="Title"
          name="title"
          placeholderText="Enter activity name"
          activityValue={activity.title}
          handleInputChange={handleChange}
        />
        <InputComponent
          label="Coach"
          name="coach"
          placeholderText="Enter coach name"
          activityValue={activity.coach}
          handleInputChange={handleChange}
        />
        <InputComponent
          label="Create Date"
          name="created"
          placeholderText="YYYYMMDD"
          activityValue={activity.created}
          handleInputChange={handleChange}
        />
        <InputComponent
          label="Day"
          name="day"
          placeholderText="Monday..."
          activityValue={activity.day}
          handleInputChange={handleChange}
        />
        <InputComponent
          label="Time"
          name="time"
          placeholderText="HH : MM"
          activityValue={activity.time}
          handleInputChange={handleChange}
        />
        <InputComponent
          label="Description"
          name="description"
          placeholderText="Enter description"
          activityValue={activity.description}
          handleInputChange={handleChange}
        />
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Save changes
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="btn btn-secondary ms-2">
            Discard changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddActivityComponent;
