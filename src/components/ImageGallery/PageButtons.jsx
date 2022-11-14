import { useState, useEffect } from 'react';
import styles from '../images.module.css';

const PageButtons = ({ totalPage, page, getPhoto, keyWord }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalPage);
  console.log(keyWord);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  




  const previousPage = e => {
    if (currentPage !== 1) {
      setCurrentPage(prev => prev - 1);
      getPhoto(keyWord, currentPage);
    }
    return;
  };

  const nextPage = e => {
    if (currentPage !== totalPages) {
      setCurrentPage(prev => prev + 1);
      getPhoto(keyWord, currentPage);
    }
    return;
  };

  const changePage = e => {
    let page = parseInt(e.target.innerText);
    setCurrentPage(page);
    getPhoto(keyWord, page);
    console.log(page);
  };

  if (currentPage + 3 < totalPages) {
    return (
      <div>
        <ul className={styles.page_buttons}>
          <li>
            <button
              className={styles.page_button_item_previous}
              onClick={previousPage}
            >
              previous
            </button>
          </li>
          <li>
            <button
              className={
                currentPage === 1
                  ? styles.page_button_item_current
                  : styles.page_button_item
              }
              onClick={changePage}
            >
              1
            </button>
          </li>
          ...
          {currentPage > 1 && (
            <li>
              <button
                className={
                  currentPage !== 1 || currentPage !== totalPages
                    ? styles.page_button_item_current
                    : styles.page_button_item
                }
                onClick={changePage}
              >
                {currentPage}
              </button>
            </li>
          )}
          {totalPages > 1 && (
            <li>
              <button className={styles.page_button_item} onClick={changePage}>
                {currentPage + 1}
              </button>
            </li>
          )}
          {totalPages > 2 && (
            <li>
              <button className={styles.page_button_item} onClick={changePage}>
                {currentPage + 2}
              </button>
            </li>
          )}
          {totalPages > 3 && (
            <li>
              <button className={styles.page_button_item} onClick={changePage}>
                {currentPage + 3}
              </button>
            </li>
          )}
          {totalPages > 2 && currentPage !== totalPages && (
            <li>
              <button
                className={
                  currentPage === totalPages
                    ? styles.page_button_item_current
                    : styles.page_button_item
                }
                onClick={changePage}
              >
                {totalPages}
              </button>
            </li>
          )}
          <li>
            <button className={styles.page_button_item_next} onClick={nextPage}>
              next
            </button>
          </li>
        </ul>
      </div>
    );
  } else if (totalPages > 7) {
    return (
      <div>
        <ul className={styles.page_buttons}>
          <li>
            <button
              className={styles.page_button_item_previous}
              onClick={previousPage}
            >
              previous
            </button>
          </li>
          <li>
            <button
              className={
                currentPage === 1
                  ? styles.page_button_item_current
                  : styles.page_button_item
              }
              onClick={changePage}
            >
              1
            </button>
          </li>
          ...
          {currentPage - 3 > 0 && (
            <li>
              <button className={styles.page_button_item} onClick={changePage}>
                {currentPage - 3}
              </button>
            </li>
          )}
          {currentPage - 2 > 0 && (
            <li>
              <button className={styles.page_button_item} onClick={changePage}>
                {currentPage - 2}
              </button>
            </li>
          )}
          {currentPage - 1 > 0 && (
            <li>
              <button className={styles.page_button_item} onClick={changePage}>
                {currentPage - 1}
              </button>
            </li>
          )}
          <li>
            <button
              className={
                currentPage !== 1
                  ? styles.page_button_item_current
                  : styles.page_button_item
              }
              onClick={changePage}
            >
              {currentPage}
            </button>
          </li>
          {totalPages > 2 && currentPage !== totalPages && (
            <li>
              <button
                className={
                  currentPage === totalPages
                    ? styles.page_button_item_current
                    : styles.page_button_item
                }
                onClick={changePage}
              >
                {totalPages}
              </button>
            </li>
          )}
          <li>
            <button className={styles.page_button_item_next} onClick={nextPage}>
              next
            </button>
          </li>
        </ul>
      </div>
    );
  } else if (totalPages < 7 && totalPages > 1 ) {
    const pages = [];

    for (let i = 1; i < totalPages; i++) {
      pages.push(i);
    }

  return(

    <div>
        <ul className={styles.page_buttons}>
        {pages.map(page => (
 <li>
 <button className={page === currentPage ? styles.page_button_item_current : styles.page_button_item} onClick={changePage}>
   {page}
 </button>
</li>
        ))}
           </ul> 
    </div>
  )


    
    
  }
  
};

export default PageButtons;
