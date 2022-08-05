import '../components/styles.css'
import axios from 'axios'
import SearchBar from './ImageGallery/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery'

const { Component } = require("react")

class App extends Component  {

state = {
  link: `https://pixabay.com/api/?q=cat&page=1&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=12`,
  key: "",
  page: 1,

}



photos = [];









async componentDidUpdate (prevState, prevProps) {

  if (this.state.link !== prevState.link) {
const photos = await axios.get(this.state.link)
     this.photos = photos.data.hits


  }
  }


 onSubmit = (e) => {
const keyWord = e.target.search.value

 this.setState({ link: `https://pixabay.com/api/?q=${keyWord}&page=1&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=12`})
 e.preventDefault()
 e.target.reset()

  }

 



render () {

 

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <SearchBar  onSubmit={this.onSubmit}/>
      <ImageGallery photos={this.photos}/>
    </div>
  )

    }
  }

  export default App