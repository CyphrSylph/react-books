import { useState, useContext } from 'react';
import BookEditor from './BookEditor';
import BookContext from '../context/book';

function BookFeature({book}) { 
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = useContext(BookContext);

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }
    
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>;
    if(showEdit) {
        content = <BookEditor onSubmit={handleSubmit} book={book} />;
    }

    return (
        <div className="book-feature">
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300`}></img>
            <div>{content}</div> 
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookFeature;