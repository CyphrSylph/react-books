import BookFeature from './BookFeature'
import useBooksContext from '../hooks/use-books-context';

function BookList() {
    const { books } = useBooksContext();
    
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