import '../styles.css';
import PropTypes from 'prop-types'; // ES6
import Modal from '../ImageGallery/Modal';
import { useState } from 'react';

const ImageGalleryItem = ({ webformatURL, largeImageURL, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const quitModal = e => {
    onModal();
  };

  if (isModalOpen) {
    return <Modal largePhoto={largeImageURL} quitModal={quitModal} />;
  }

  return (
    <li class="ImageGalleryItem">
      <img
        class="ImageGalleryItem-image"
        name={id}
        src={webformatURL}
        alt=""
        onClick={onModal}
        large={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  onModal: PropTypes.func,
};

export default ImageGalleryItem;
