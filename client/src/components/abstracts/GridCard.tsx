import Card from "./Card";
import exportPasses from "./db";

type DayProps = {
  dayText: string;
  dayString: string;
};

const GridCard = ({ dayText, dayString }: DayProps) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <p style={{ textAlign: "center" }}>{dayText}</p>
        {exportPasses().map((pass) =>
          pass.day === dayString ? (
            <Card
              passID={pass.ID}
              pass={pass.pass}
              date={pass.date}
              time={pass.time}
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
