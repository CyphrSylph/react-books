import axios from 'axios';
import { useState, useEffect } from 'react';
import BookCreator from './components/BookCreator';
import BookList from './components/BookList';
import './index.css';

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3003/books');
        
        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks();
    },[]);

    const createBook = async (title) => {

        const response = await axios.post('http://localhost:3003/books', {
            title
        });

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };

    const editBookById =  async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3003/books/${id}`,{
            title: newTitle
        });

        
        const updatedBooks = books.map((book) => {
            if(book.id === id) {
                return {...book, ...response.data};
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    const deleteBookbyId = async (id) => {
        
        await axios.delete(`http://localhost:3003/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList books={books} onEdit={editBookById} onDelete={deleteBookbyId} />
            <BookCreator onCreate={createBook} />
        </div>
    );
}

export default App;