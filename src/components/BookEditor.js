import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEditor({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useBooksContext();

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(book.id, title);
        editBookById(book.id, title);
    };

    return (
        <form className="book-feature" onSubmit={handleSubmit}>
            <label> Title </label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">
                Save
            </button>
        </form>
    );
}

export default BookEditor;