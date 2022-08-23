import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types'; // ES6

const ImageGallery = ({ Images }) => {
  return (
    <ul class="ImageGallery">
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
  onModal: PropTypes.func,
};

export default ImageGallery;

/*



*/
