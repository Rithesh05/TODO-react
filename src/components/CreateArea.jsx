import React, { useState } from "react";

function CreateArea(props) {
  const [data, setdata] = useState({ title: "", msg: "" });

  function submitwork(event) {
    event.preventDefault();
    props.toadata(data);
    setdata({title:"",msg:""});
  }

  function datachanage(event) {
    const { name, value } = event.target;
    setdata(prev => ({
      ...prev,
      [name === "content" ? "msg" : name]: value
    }));
  }

  return (
    <div>
      <form onSubmit={submitwork}>
        <input
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={datachanage}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={data.msg}
          onChange={datachanage}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
