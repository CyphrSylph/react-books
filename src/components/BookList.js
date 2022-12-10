import BookFeature from './BookFeature'

function BookList({books, onEdit, onDelete}) {
    const renderedBooks = books.map((book) => {
        return <BookFeature key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />;
    })
    return <div className='book-list'> {renderedBooks} </div>;
}

export default BookList;