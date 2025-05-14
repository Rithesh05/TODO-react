import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [totdata, settotdata] = useState([]);

 function ondelete(id) {
  settotdata(prevData => prevData.filter((item, index) => index !== id));
}


  function adddata(content) {
    settotdata([...totdata, content]);
    console.log(totdata);
  }
  return (
    <div>
      <Header />
      <CreateArea toadata={adddata} />
      {totdata.map((data, index) => {
        return <Note key={index} id={index} title={data.title} content={data.msg} delete={ondelete} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
