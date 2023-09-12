import React from 'react'
import { useState, useEffect } from 'react';
import { User} from '../types/Users'


const MyBookingsComponent = () => {
    const [activities, setActivities] = useState<User[]>([]);
    const [newArray, setNewArray] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((json) => setActivities(json.users))
      .catch((err) => console.log(err));

      const key = "username"; 
      const user = localStorage.getItem(key);

      activities.map((activity) => {
        if(user === activity.username) {
            console.log(activity.activities);
            if (activity.activities !== undefined){
            const session = activity.activities;
            setNewArray(session);
            console.log(newArray);
            }
            // setNewArray(session);
        }
      })
     
  }, []);

  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <p>My bookings</p>
            {newArray?.map((activities) => (
                <div key={activities}>{activities}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
    // <div>
    // <p>My bookings</p>
    //   {users.map((user) => (
    //     <div key={user.id}>
            
    //         {user.activities}</div>
    //   ))}
    // </div>
  )
}

export default MyBookingsComponent
