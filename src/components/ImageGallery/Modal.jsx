import '../styles.css'



const Modal = ({largePhoto}) => {

console.log(typeof(largePhoto))


return (

<div class="Overlay">
  <div class="Modal">
    <h1>Wait...</h1>
    <img src={largePhoto.largeImageURL} alt="" id={largePhoto.id} class='ImageGalleryItem-image' />
  </div>
</div>

)
}

export default Modal