import '../styles.css'



const Modal = ({largePhoto, quitModal}) => {


return (

<div class="Overlay" tabIndex={0} onKeyDown={quitModal}>
  <div class="Modal" >
   
    <img src={largePhoto[0].largeImageURL} alt={largePhoto[0].tags}  id={largePhoto[0].id} />
  </div>
</div>

)
}

export default Modal