import '../styles.css'


const ImageGalleryItem = ({ webformatURL, largeImageURL, id, onModal}) => {

return (

    <li class="ImageGalleryItem">
  <img class='ImageGalleryItem-image' name={id}  src={webformatURL} alt="" onClick={onModal}/>
</li>
)
    
}

export default ImageGalleryItem