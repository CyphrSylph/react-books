import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';


function BookCreator() {
    const [title, setTitle] = useState('');
    const { createBook } = useBooksContext();
    
    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("From Book Creator",createBook)
        createBook(title);
        setTitle('');
    };

    return ( 
        <div className='book-create'>
            <h3>Add a Book:</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className='input' value={title} onChange={handleChange}/>
                <button className='button' >Create Book</button>
            </form>
        </div>
    );
}

export default BookCreator;