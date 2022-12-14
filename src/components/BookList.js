import BookFeature from './BookFeature'
import { useContext } from 'react';
import BookContext from '../context/book';

function BookList({books, onEdit, onDelete}) {

    const { count, incrementCount } = useContext(BookContext);

    const renderedBooks = books.map((book) => {
        return <BookFeature key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />;
    })
    return (
        <div className='book-list'> 
            {count}
            <button onClick={incrementCount}>Click</button>
            {renderedBooks} 
        </div>
    );
}

export default BookList;