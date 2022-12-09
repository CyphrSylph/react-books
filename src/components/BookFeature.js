function BookFeature({book, onDelete}) { 
    const handleClick = () => {
        onDelete(book.id);
    }

    return (
        <div className="book-feature">
            {book.title} 
            <div className="actions">
                <button className="delete" onClick={handleClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookFeature;