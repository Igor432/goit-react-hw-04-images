import styles from '../images.module.css';
import PropTypes from 'prop-types'; // ES6
import Modal from '../ImageGallery/Modal';
import { useState } from 'react';

const ImageGalleryItem = ({ webformatURL, largeImageURL, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
   
  };

 

  if (isModalOpen) {
    return (
      <Modal
        largePhoto={largeImageURL}
        quitModal={toggleModal}
       modal = {isModalOpen}
      />
    );
  }

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItem_image}
        name={id}
        src={webformatURL}
        alt=""
        onClick={toggleModal}
        large={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
