import BookFeature from './BookFeature'
import BookContext from '../context/book';
import { useContext } from 'react';

function BookList() {
    const { books } = useContext(BookContext);
    
    const renderedBooks = books.map((book) => {
        return <BookFeature key={book.id} book={book} />;
    })
    return (
        <div className='book-list'> 
            {renderedBooks} 
        </div>
    );
}

export default BookList;