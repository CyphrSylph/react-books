import { useEffect, useContext } from 'react';
import BookCreator from './components/BookCreator';
import BookList from './components/BookList';
import BookContext from './context/book';
import './index.css';

function App() {
    const { fetchBooks } = useContext(BookContext);

    useEffect(() => {
        fetchBooks();
    },[fetchBooks]);

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList />
            <BookCreator />
        </div>
    );
}

export default App;