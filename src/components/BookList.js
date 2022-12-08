import BookFeature from './BookFeature'

function BookList({books}) {
    const renderedBooks = books.map((book) => {
        return <BookFeature key={book.id} book={book}/>;
    })
    return <div className='book-list'> {renderedBooks} </div>;
}

export default BookList;