import Card from "./Card";
import exportSessions from "./db";
import {useEffect, useState} from 'react';

type DayProps = {
  dayText: string;
  dayString: string;
};

const GridCard = ({ dayText, dayString }: DayProps) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch('api/admin/activities')
    .then(data=> data.json())
    .then(json => setSessions(json.activites))
    .catch(error => {
      console.log(error); 
    }); 
  }, [])

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <p style={{ textAlign: "center" }}>{dayText}</p>
        {sessions?.map(({ day, title, date, time, id}) => (
          day === dayString ? 
          <div key={id}>
          (<Card title={title} date={date} time={time}/>) </div> : ("console.log")
        ))}
      </div>
    </>
  );
};

export default GridCard;

// {exportSessions().map((session) =>
//   session.day === dayString ? (
//     <Card
//       title={session.title}
//       date={session.date}
//       time={session.time}
//     />
//   ) : (
//     ""
//   )
// )}
