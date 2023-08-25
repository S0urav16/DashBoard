import React from "react";
import { MdOutlineCancel } from "react-icons/md";

export const CancelButton = ({ onCancel }) => {

  return (
    <button onClick={onCancel}
     style={{color:'white'}}>
      {" "}
      <MdOutlineCancel />
    </button>
  );
};


