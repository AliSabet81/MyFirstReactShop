import React, { ButtonHTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { ReactElement } from "react";

import './style.css'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',    
  },
};

interface modalType extends ButtonHTMLAttributes<HTMLButtonElement>{
  children ?: ReactElement;
  icone ?: string | ReactElement;
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ModalComponent = (props: modalType) => {
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  let openModal=()=> {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = '#FF0000';
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} {...props} className={`${props.className} flex items-center h-12 w-44 justify-between`}>
                <span className="p-2.5">{props.icone}</span>
                <span className="text-white font-bold text-lg">{props.name}</span>
            </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onAfterOpen={afterOpenModal}
        style={customStyles}
        overlayClassName='Overlay'
        contentLabel="Example Modal"  
        closeTimeoutMS={2000}
      >
        {props.children}
        <button onClick={closeModal}></button>
      </Modal>
    </div>
  );
}
export default ModalComponent