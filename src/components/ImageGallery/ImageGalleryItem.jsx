import '../styles.css'


const ImageGalleryItem = ({ webformatURL, largeImageURL}) => {

return (

    <li class="ImageGalleryItem" >
  <img class='ImageGalleryItem-image' src={webformatURL} alt="" />
</li>
)
    
}

export default ImageGalleryItem