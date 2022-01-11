import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Pads = (props) => {
  const deleteArr = () => {
    props.deleteItem(props.id);
  };
  return (
    <>
      <div>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <DeleteOutlineIcon className="trash" onClick={deleteArr} />
      </div>
    </>
  );
};
export default Pads;
