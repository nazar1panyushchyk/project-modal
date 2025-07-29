import React from "react";
import "../styles/Modal.css";

export default class Modal extends React.Component {

  componentDidUpdate() {
    const { isOpen } = this.props;
    {isOpen ? console.log('Modal is open') : console.log('Modal is closed')};
  }

  render() {
    return (
      <>
        <h1>Modal window</h1>
      </>
    );
  }
}
