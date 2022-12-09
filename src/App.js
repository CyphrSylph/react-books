import { useState } from 'react';
import BookCreator from './components/BookCreator';
import BookList from './components/BookList';
import './index.css';

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedBooks = [...books, { 
            id: Math.round(Math.random() * 9999),
            title, 
            },
        ];
        setBooks(updatedBooks);
    };

    const deleteBookbyId = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);
    };

    return (
        <div className='app'>
            <BookList books={books} onDelete={deleteBookbyId} />
            <BookCreator onCreate={createBook} />
        </div>
    );
}

export default App;