import './styles.css';
import axios from 'axios';
import SearchBar from './ImageGallery/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './ImageGallery/Button';
import Loader from './ImageGallery/Loader';
import { useState } from 'react';


function App() {
  const [photos, setPhotos] = useState([]);
  const [key, setKey] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(1);

  async function getPhoto(keyWord, page) {
    try {
      const link = `https://pixabay.com/api/?q=${keyWord}&page=${page}&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=12`;
      const getPhotos = await axios.get(link);
      setPhotos(prev => [...prev, ...getPhotos.data.hits]);
      setPage(prev => prev + 1);
    } catch {
      console.log('error');
    } finally {
      setisLoading(false);
      console.log(photos);
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    setisLoading(true);
    setPhotos([]);
    setPage(1);
    getPhoto(key, 1);
  };

  const onChange = e => {
    setKey(e.target.value);
  };

  const loadMore = e => {
    e.preventDefault();
    getPhoto(key, page);
  };

  return (
    <div
      class="App"
      style={{
        height: '100vh',
        display: 'flex',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <SearchBar onSubmit={onSubmit} onChange={onChange} />
      {isLoading && <Loader Loading={isLoading} />}
      <ImageGallery Images={photos} />

      {photos.length >= 12 && <Button loadMOre={loadMore} />}
    </div>
  );
}

export default App;
