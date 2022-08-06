import '../styles.css'


const ImageGalleryItem = ({key, webformatURL, largeImageURL}) => {

return (

    <li class="ImageGalleryItem" id={key}>
  <img class='ImageGalleryItem-image' src={webformatURL} alt="" />
</li>
)
    
}

export default ImageGalleryItem