import './styles.css'
import axios from 'axios'
import SearchBar from './ImageGallery/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './ImageGallery/Button'
import Modal from './ImageGallery/Modal'
import Loader from './ImageGallery/Loader'
import { useState } from 'react'
import { useEffect } from 'react'


function App () {


const [link, setLink] = useState("")
const [key, setKey] = useState('')
const [photos, setPhotos] = useState([]) 
const [total, setTotal] = useState('')
const [perPage, setperPage] = useState(12)
const [isModalOpen, setIsModalOpen] = useState(false)
const [largePhoto, setLargePhoto] = useState([])
const [isLoading, setisLoading] = useState(false)

const page = 1




/*
const componentDidUpdate = (prevProps, prevState) => {

  console.log(this.state.photos) 
const currentKey = this.state.key
console.log( currentKey)
if (prevState.key !== this.state.key) {

  this.setState({page: 1, perPage: 12})
}

if (prevState.link !== this.state.link) {
this.getPhoto()

} else if (prevState.perPage !== this.state.perPage) {
  this.setState({ link: `https://pixabay.com/api/?q=${this.state.key}&page=${this.state.page}&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`})

  } 


document.addEventListener('keydown', this.quitModal)


}

*/



useEffect(() => {

const getPhoto = async (key) => {

  const getPhotos = await axios.get(`https://pixabay.com/api/?q=${key}&page=${page}&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=${perPage}`)
  setPhotos(getPhotos.data.hits)
setTotal(getPhoto.data)
  console.log(photos)
  setisLoading(false)
}
getPhoto(key)

}, [key, perPage])




const onSubmit =  (e) => {
  e.preventDefault()
  setisLoading(true)
const keyWord = e.target.search.value
setKey(keyWord)

 e.target.reset()


}



 

const loadMore = (e) => {

e.preventDefault()

setperPage(state => state + 12)
console.log(perPage)

}



const onModal = (e) => {
  const target = e.target
 setIsModalOpen(true)
let bigPhoto = photos.filter((photo) => photo.id === Math.floor(target.name))
setLargePhoto(bigPhoto)
  }





 const quitModal = (e) => {
if (e.key === "Escape") {
    setIsModalOpen(false)
}
    
  }


  return (
    <div 
    class='App'
      style={{
        height: '100vh',
        display: 'flex',      
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column'
      }}
    >
      <SearchBar  onSubmit={onSubmit}/>
   {isLoading && <Loader Loading={isLoading}/>}
   <ImageGallery Images={photos} onModal={onModal}/>

      <Button loadMOre={loadMore}/>
     {isModalOpen && <Modal photos={photos} largePhoto={largePhoto} />}
    </div>
  )

    }
  

  export default App


/*


*/