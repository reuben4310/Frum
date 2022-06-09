import React, { useState } from "react";

export default function Questions() {
  const [question, setQuestion] = React.useState("");
  const [uploadResponse, setUploadResponse] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    setQuestion("");
    const dataArray = new FormData();
    if (question !== "") {
      dataArray.append(
        "uploadResponse",
        setUploadResponse((prev) => ` ${prev}${"Question:"}${question}${"\n"}`)
      );
      console.log(uploadResponse);
    } else return;
  };

  return (
    <>
      <br />
      &nbsp;&nbsp;
      <a href="/">
        <button>Home</button>
      </a>
      <div style={{ textAlign: "center" }}>
        <h4>
          Feel free do ask any question. And we will try to get back to you, as
          soon as possible
        </h4>

        <form onSubmit={submitForm}>
          <br />
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={"Question"}
          />

          <input type="submit" />
        </form>
        <hr />
        <pre>{uploadResponse}</pre>
      </div>
    </>
  );
}
