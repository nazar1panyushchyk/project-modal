import "./App.css";
import Modal from "./components/Modal";
import React from "react";

export default class App extends React.Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
    document.body.classList.add("modalBackground");
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    document.body.classList.remove("modalBackground");
  };

  render() {
    return (
      <div
        style={{ padding: "40px", textAlign: "center" }}
        className="container"
      >
        <h1>React Модальне Вікно</h1>
        <button onClick={this.openModal}>Відкрити модальне вікно</button>
        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal} />
      </div>
    );
  }
}
