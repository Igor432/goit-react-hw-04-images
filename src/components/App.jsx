import '../components/styles.css'
import axios from 'axios'

const { Component } = require("react")

class App extends Component  {

state = {
  photoBaza: [],
  key: ""
}



async componentDidMount () {


const photos = await axios.get(`https://pixabay.com/api/?q=${this.state.key}&page=1&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=12`)
this.setState({photoBaza: {id: photos.data.hits.id, webformatURL: photos.data.hits.webformatURL, largeImageURL: photos.data.hits.largeImageURL }})
console.log(this.state.photoBaza)


}


onSumbit () {

  /*  для інпута в серч барі*/
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
      {this.state.photos}
    </div>
  )

    }
  }

  export default App