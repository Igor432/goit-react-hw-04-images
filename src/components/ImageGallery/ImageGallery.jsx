import ImageGalleryItem from './ImageGalleryItem';
import styles from '../images.module.css';
import PropTypes from 'prop-types'; // ES6

const ImageGallery = ({ Images }) => {
  return (
    <ul className={styles.ImageGallery}>
      {Images.map(photo => (
        <ImageGalleryItem
          id={photo.id}
          key={photo.id}
          webformatURL={photo.webformatURL}
          largeImageURL={photo.largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  Images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;

/*



*/
