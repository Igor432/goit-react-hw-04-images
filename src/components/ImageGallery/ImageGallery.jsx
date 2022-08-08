import ImageGalleryItem from "./ImageGalleryItem"




const ImageGallery = ({photos, onModal}) => {

    return (
        <ul class="ImageGallery">

{photos.map(photo =>
    <ImageGalleryItem id={photo.id} key={photo.id} webformatURL={photo.webformatURL} largeImageURL={photo.largeImageURL} onModal={onModal}/>
)}



</ul>
    )
}

export default ImageGallery