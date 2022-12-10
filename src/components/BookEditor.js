import { useState } from 'react';

function BookEditor() {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("New tilte is: ", title);
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