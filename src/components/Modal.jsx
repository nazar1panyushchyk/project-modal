import React from "react";
import "../styles/Modal.css";

export default class Modal extends React.Component {
  componentDidMount() {
    console.log('modal is mounted')
  }

  render() {
    return (
      <>
        <h1>Modal window</h1>

        <div
          style={{
            border: "1px solid #000",
            borderRadius: "36px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            backgroundColor: "rgba(199, 198, 198, 0.8)",
            width: "400px",
            height: "400px"
          }}
        >
          <label>Enter text</label>
          <input type="text" />
          <button>submit</button>
        </div>
      </>
    );
  }
}
