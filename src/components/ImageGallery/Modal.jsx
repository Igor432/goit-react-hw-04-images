import '../styles.css';
import PropTypes from 'prop-types'; // ES6
import { useEffect } from 'react';

const Modal = ({ largePhoto, quitModal }) => {
  const keyPress = e => {
    if (e.code === 'Escape') {
      quitModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyPress);
  });

  return (
    <div class="Overlay" onClick={quitModal}>
      <div class="Modal">
        <img src={largePhoto} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  quitModal: PropTypes.func,
};

export default Modal;
