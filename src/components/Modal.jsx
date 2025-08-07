import React from "react";
import { Component } from "react";
import "../styles/modal.css";



export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    console.log("Modal відкрився");
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    console.log("Modal закрився");
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOpen && this.props.isOpen) {
      console.log("Modal став відкритим");
    }
  }

  handleKeyDown = (e) => {
    if (e.key === "Escape") {
      this.props.onClose();
    }
  };


  render() {
    if (!this.props.isOpen) return null;

    return (
      <div onClick={this.props.onClose}>
        <div className="modal-window" sx={{backgroundColor: 'blue'}} onClick={(e) => e.stopPropagation()}>
          <h2>Модальне вікно</h2>
          <p>Натисни ESC або кнопки, щоб закрити</p>
          <button onClick={this.props.onClose}>Закрити</button>
        </div>
      </div>
    );
  }
}
