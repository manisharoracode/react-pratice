import React, { useState, useEffect, useCallback } from 'react';
import BookList from './BookDetail';
import AddBook from './AddBook';


function MainBook() {
  const [book, setBook] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBookHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-learn-268ba-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const loadedMovies = [];
      for(const key in data ){
        loadedMovies.push({
          id: key,
          titleRef:data[key].titleRef,
          descRef:data[key].descRef,
          dateRef:data[key].dateRef,

        })
      }

      setBook(loadedBook);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBookHandler();
  }, [fetchBookHandler]);

  async function addMovieHandler(Book) {
    // console.log(Book);
    const response = await fetch(`https://react-learn-268ba-default-rtdb.firebaseio.com/movies.json`,{
      method:'POST',
      body: JSON.stringify(Book),
      headers:{
        'content-type':'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no Book.</p>;

  if (Book.length > 0) {
    content = <MoviesList Book={Book} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <div class="spinner-box">
    <div class="three-quarter-spinner"></div>
  </div>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default MainBook;
