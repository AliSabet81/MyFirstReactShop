// import React, { ButtonHTMLAttributes } from 'react';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import { ReactElement } from "react";

// import './style.css'
// import SignIn from './Modals/sign/signin';
// import SignUp from './Modals/sign/signup';
// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',    
//   },
// };

// interface modalType extends ButtonHTMLAttributes<HTMLButtonElement>{
//   children ?: ReactElement;
//   buton ?: ReactElement;
//   icone ?: string | ReactElement;
// }

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#root');

// const MooodalComponent = (props: modalType) => {
//   let subtitle: any;
//   const [modalIsOpen, setIsOpen] = React.useState(false);
//   const [modaloneIsOpen, setoneIsOpen] = React.useState(true);


//   let openModal=()=> {
//     setIsOpen(true);
//     setoneIsOpen(true)
//   }
//   function afterOpenModal() {
//     subtitle.style.color = '#FF0000';
//   }
//   function closeModal() {
//     setIsOpen(false);
//     setoneIsOpen(false)
//   }
//   function afterCloseModal() {
//     setIsOpen(false);
//       setTimeout(()=>{
//           setIsOpen(true);
//           setoneIsOpen(false)
//       },3001)
//   }

//   return (
//     <div>
//       <button onClick={openModal} {...props} className={`${props.className} flex items-center h-12 w-44 justify-between`}>
//                 <span className="p-2.5">{props.icone}</span>
//                 <span className="text-white font-bold text-lg">{props.name}</span>
//             </button>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         onAfterOpen={afterOpenModal}
//         // onAfterClose={afterCloseModal}
//         style={customStyles}
//         overlayClassName='Overlay'
//         contentLabel="Example Modal"  
//         closeTimeoutMS={2000}
//       >
//         {modaloneIsOpen ? <SignIn/> : <SignUp/>}
//         <button className={`${modaloneIsOpen ? "block" : "hidden"} absolute left-0 w-1/2 bottom-8 h-12`} onClick={afterCloseModal}></button>
//       </Modal>
//     </div>
//   );
// }
// export default MooodalComponent