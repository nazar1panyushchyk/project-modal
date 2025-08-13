import React from "react";
import { Component } from "react";
import "../styles/Modal.css";

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
      <div
        onClick={this.props.onClose}
        className="modal-container animate__backInLeft"
      >
        <div onClick={(e) => e.stopPropagation()} className="modal">
          <h2>Модальне вікно</h2>
          <p>
            Натисни <span>ESC</span> або кнопки, щоб закрити
          </p>
          <button onClick={this.props.onClose}>Закрити</button>
        </div>
      </div>
    );
  }
}
