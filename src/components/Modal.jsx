import React from "react";
import "../styles/Modal.css";

class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.props.onClose(); 
    }
  };

  render() {
    if (!this.props.isOpen) {
      return null; 
    }

    return (
      <div className="modal">
        <div className="modal-content">
          <button onClick={this.props.onClose}>Закрити</button>
          {}
        </div>
      </div>
    );
  }
}

export default Modal;