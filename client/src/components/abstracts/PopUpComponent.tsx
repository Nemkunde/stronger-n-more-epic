import React from "react";
import  {Button} from '../../styles/styles'

type PopUpProps = {
  onOkClick: Function;
  onCancelClick: Function;
  insertText: string;
};

const PopUpComponent = ({
  onOkClick,
  onCancelClick,
  insertText,
}: PopUpProps): JSX.Element => {
  return (
    <div
      style={{
        width: "500px",
        height: "200px",
        position: "absolute",
        zIndex: "100",
        background: "gray",
        color: "white",
        top: "22%",
        left: "25%",
        borderRadius: "7px",
        boxShadow: "2px 2px 1px gray"
      }}>
      <p>{insertText}</p>
      <div style={{ position: "absolute", top: "60%", left: "30%"}}>
        <Button onClick={() => onOkClick()}>Ok</Button>
        <Button onClick={() => onCancelClick()}>Cancel</Button>
      </div>
    </div>
  );
};

export default PopUpComponent;
