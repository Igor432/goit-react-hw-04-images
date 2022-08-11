import { useContext } from 'react'
import '../styles.css'
import { ContextValues } from 'components/App'

const ImageGalleryItem = ({ webformatURL, largeImageURL, id}) => {

const onModal = useContext(ContextValues)

return (

    <li class="ImageGalleryItem">
  <img class='ImageGalleryItem-image' name={id}  src={webformatURL} alt="" onClick={onModal}/>
</li>
)
    
}

export default ImageGalleryItem