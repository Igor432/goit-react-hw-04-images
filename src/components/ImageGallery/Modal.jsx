import styles from '../images.module.css';
import PropTypes from 'prop-types'; // ES6
import { useEffect } from 'react';

const Modal = ({ largePhoto, quitModal, modal }) => {
  const keyPress = e => {
    if (e.code === 'Escape') {
      quitModal();
      window.removeEventListener('keydown', keyPress);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyPress);
  });

  return (
    <div className={styles.Overlay} onClick={quitModal}>
      <div className={styles.Modal}>
        <img src={largePhoto} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  quitModal: PropTypes.func.isRequired,
  largePhoto: PropTypes.string.isRequired,
};

export default Modal;
