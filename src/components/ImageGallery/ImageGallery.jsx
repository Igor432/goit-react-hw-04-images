import ImageGalleryItem from "./ImageGalleryItem"


const ImageGallery = ({photos}) => {

    return (
        <ul class="ImageGallery">

{photos.map(photo =>
    <ImageGalleryItem key={photo.id} webformatURL={photo.webformatURL} largeImageURL={photo.largeImageURL}/>
)}



</ul>
    )
}

export default ImageGallery