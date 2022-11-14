import styles from './images.module.css';
import axios from 'axios';
import SearchBar from './ImageGallery/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './ImageGallery/Loader';
import PageButtons from './ImageGallery/PageButtons';
import { useState } from 'react';

function App() {
  const [photos, setPhotos] = useState([]);
  const [key, setKey] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState({})

  async function getPhoto(keyWord, page) {
    try {
      const link = `https://pixabay.com/api/?q=${keyWord}&page=${page}&key=28780636-ee20ed417c8a5aa1eeee48e35&image_type=photo&orientation=horizontal&per_page=12`;
      const getPhotos = await axios.get(link);
      setTotalPage(getPhotos.data.totalHits / 12)
      setPhotos([...getPhotos.data.hits]);
      setPage(page)
      console.log(key)
      /*
      setPhotos(prev => [...prev, ...getPhotos.data.hits]);
      */
  
      /*
      setPage(prev => prev + 1);
      */
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
    getPhoto(key, page);
  };

  const onChange = e => {
    setKey(e.target.value);
  };

  /*
import Button from './ImageGallery/Button';


  const loadMore = e => {
    e.preventDefault();
    getPhoto(key, page);
  };
  */

  return (
    <div class={styles.App}>
      <SearchBar onSubmit={onSubmit} onChange={onChange} keyWord={key}/>
      {isLoading && <Loader Loading={isLoading} />}
      <ImageGallery Images={photos} />

      {totalPage > 0 && <PageButtons totalPage={totalPage} page={page} getPhoto={getPhoto} keyWord={key}/>}
    </div>
  );
}

export default App;


/*
      {photos.length >= 12 && <Button loadMOre={loadMore} />}
      */