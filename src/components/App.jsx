import './styles.css'
import axios from 'axios'
import SearchBar from './ImageGallery/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './ImageGallery/Button'
import Modal from './ImageGallery/Modal'
import Loader from './ImageGallery/Loader'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { createContext } from 'react'
export const ContextValues = createContext()


function App () {


const [photos, setPhotos] = useState([]) 
const [key, setKey] = useState("")
const [total, setTotal] = useState(0)
const [perPage, setperPage] = useState(12)
const [isModalOpen, setIsModalOpen] = useState(false)
const [largePhoto, setLargePhoto] = useState([])
const [isLoading, setisLoading] = useState(false)
const [page, setPage] = useState(1)
const [link, setLink] = useState('')

const isFirstRender = useRef(true)

useEffect(() => {

window.addEventListener('keydown', quitModal)

}, [isModalOpen])



useEffect(() => {

setLink("")

}, [])



useEffect(() => {

  if (isFirstRender.current) {
    isFirstRender.current = false;
    return
  }
  
  async function getPhoto ()  {
    setLink(`https://pixabay.com/api/?q=${key}&page=${page}&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=${perPage}`)
    
    
  const getPhotos = await axios.get(link)
  setPhotos(getPhotos.data.hits)
  setTotal(getPhotos.data.total)
  setisLoading(false)
  }

  if (key !== "") {
    getPhoto()
} else {
  console.log("empty")
}
  

}, [key, link, perPage, page])



  




const onSubmit =  (e) => {
  e.preventDefault()
  setisLoading(true)
const keyWord = e.target.search.value
if (keyWord === key) {
  setisLoading(false)
  return 
}
setKey(keyWord)
setPage(1)
setperPage(12)
e.target.reset()
setLink(`https://pixabay.com/api/?q=${keyWord}&page=${page}&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=${perPage}`)

}



 

const loadMore = (e) => {
e.preventDefault()
setperPage(state => state + 12)
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
      <ContextValues.Provider value={onModal}>
      <SearchBar  onSubmit={onSubmit}/>
   {isLoading && <Loader Loading={isLoading}/>}
   {key !== "" && <ImageGallery Images={photos} onModal={onModal}/>}

      {total > 12 && <Button loadMOre={loadMore}/>}
     {isModalOpen && <Modal photos={photos} largePhoto={largePhoto} />}
     </ContextValues.Provider>
    </div>
  )

    }
  

  export default App


/*


*/

