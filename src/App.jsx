import "./App.css";
import Modal from "./components/Modal";
import React from "react";

export default class App extends React.Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="open-modal" style={{ padding: "40px", textAlign: "center" }}>
        <h1>React Модальне Вікно</h1>
        <button onClick={this.openModal}>Відкрити модальне вікно</button>
        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal} />
      </div>
    );
  }
}



