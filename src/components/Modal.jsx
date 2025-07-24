import React from "react";
import "../styles/Modal.css";


class Modal extends React.Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {  
    if(!prevProps.isOpen || this.props.isOpen){
    console.log("modal is open")
    }
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

      <>
      <div className="modal">
        <div className="modal-content">
          <button onClick={this.props.onClose}>Закрити</button>
          {}
        </div>
      </div>

      
        <h1>Modal window</h1>

        <form
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
        </form>
      </>

    );
  }
}

export default Modal;