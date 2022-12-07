import { useState } from 'react';
import BookCreator from './components/BookCreator';

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {

        console.log('Need to add book with title:', title)
    };

    return (
        <div>
            <BookCreator onCreate={createBook} />
        </div>
    );
}

export default App;