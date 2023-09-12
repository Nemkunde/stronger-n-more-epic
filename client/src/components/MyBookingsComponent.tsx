import React from "react";

type ActivityProps = {
    setActivites: string[]
}

const MyBookingsComponent = ({setActivites}: ActivityProps) => {
  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <p>My bookings</p>
            {setActivites?.map((activities) => (
              <div key={activities}>{activities}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsComponent;
