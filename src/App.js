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

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id) {
                return {...book, title: newTitle};
            }
            return book;
        });
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
            <h1>Reading List</h1>
            <BookList books={books} onEdit={editBookById} onDelete={deleteBookbyId} />
            <BookCreator onCreate={createBook} />
        </div>
    );
}

export default App;