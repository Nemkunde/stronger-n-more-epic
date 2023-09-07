import Card from "./Card";
import exportsessiones from "./db";

type DayProps = {
  dayText: string;
  dayString: string;
};

const GridCard = ({ dayText, dayString }: DayProps) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <p style={{ textAlign: "center" }}>{dayText}</p>
        {exportsessiones().map((session) =>
          session.day === dayString ? (
            <Card
              title={session.title}
              date={session.date}
              time={session.time}
            />
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
};

export default GridCard;
