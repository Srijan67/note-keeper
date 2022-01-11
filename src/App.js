import React, { useState } from "react";
import Header from "./Header";
import Button from "@mui/material/Button";
import Pads from "./Pads";

function App() {
  const [data, setdata] = useState({
    title: "",
    content: "",
  });
  const [arr, setarr] = useState([]);
  const inputChange = (e) => {
    const { value, name } = e.target;
    setdata((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const saveNote = () => {
    setarr((preVal) => {
      return [...preVal, data];
    });
    setdata({
      title: "",
      content: "",
    });
  };
  const onDelete = (id) => {
    setarr((preVal) =>
      preVal.filter((val, index) => {
        return id !== index;
      })
    );
  };
  return (
    <>
      <Header />
      <div className="noteArea">
        <input
          text="text"
          onChange={inputChange}
          name="title"
          value={data.title}
          placeholder="title"
        />
        <textarea
          rows="3"
          name="content"
          onChange={inputChange}
          value={data.content}
          placeholder="write a note"
        ></textarea>
        <Button
          className="btnExecute"
          onClick={saveNote}
          variant="outlined"
          color="error"
        >
          +
        </Button>
      </div>
      <div className="displayArea">
        {arr.map((value, index) => {
          return (
            <Pads
              key={index}
              id={index}
              title={value.title}
              content={value.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
