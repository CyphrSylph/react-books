import { useState } from 'react';
import BookEditor from './BookEditor';

function BookFeature({book, onDelete}) { 
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id);
    }
    
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    let content = <h3>{book.title}</h3>;
    if(showEdit) {
        content = <BookEditor />;
    }

    return (
        <div className="book-feature">
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