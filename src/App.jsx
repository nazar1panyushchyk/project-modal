import "./App.css";
import ModalWindow from "./components/Modal";
import React from "react";

export default class App extends React.Component {
  state = {
    isOpen: false,
  }
  openModal = () =>{
    this.setState({isOpen: true})
  }
  closeModal = () =>{
    this.setState({isOpen: false})
  }
  render() {

  return (
    <>
    <h1>hello</h1>
      <button onClick={this.openModal}>Відкрити</button>
      <ModalWindow isOpen={this.state.openModal} isClose={this.closeModal}/>
    </>
  );
}
}



