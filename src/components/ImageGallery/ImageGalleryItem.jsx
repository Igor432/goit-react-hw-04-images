import '../styles.css'


const ImageGalleryItem = ({key, webformatURL, largeImageURL}) => {

return (

    <li class="gallery-item" id={key}>
  <img src={webformatURL} alt="" />
</li>
)
    
}

export default ImageGalleryItem