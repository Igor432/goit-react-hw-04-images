import ImageGalleryItem from "./ImageGalleryItem"



const ImageGallery = ({Images, onModal}) => {
 
    return (
        <ul class="ImageGallery">

{Images.map(photo =>
    <ImageGalleryItem id={photo.id} key={photo.id} webformatURL={photo.webformatURL} largeImageURL={photo.largeImageURL} onModal={onModal}/>
)}

</ul>
    )


}

export default ImageGallery

/*



*/