import './styles.css'
import axios from 'axios'
import SearchBar from './ImageGallery/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery'
import Button from './ImageGallery/Button'

const { Component } = require("react")

class App extends Component  {


state = {
  link: '',
  page: 1,
  photos: [],
  total: 0,
  key: '',
perPage: 12
}


componentDidUpdate = (prevProps, prevState) => {

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


}




getPhoto = async () => {
  
  const photos = await axios.get(this.state.link)
  this.setState({photos: photos.data.hits, total: photos.data.total})
}



 onSubmit = (e) => {
const {page} = this.state
const {perPage} = this.state
const keyWord = e.target.search.value
this.setState({key: keyWord})
 this.setState({key: keyWord, link: `https://pixabay.com/api/?q=${keyWord}&page=${page}&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=${perPage}`})
 e.preventDefault()
 e.target.reset()



  }

 

loadMore = (e) => {

e.preventDefault()

  this.setState(prevState => {
    return {
      
      perPage: prevState.perPage + 12,
      
    }
  })
console.log(this.state.page)

}




render () {

 const {total} = this.state

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
      <SearchBar  onSubmit={this.onSubmit}/>
      <ImageGallery photos={this.state.photos}/>
      {total > 12 && <Button loadMOre={this.loadMore}/>}
    </div>
  )

    }
  }

  export default App