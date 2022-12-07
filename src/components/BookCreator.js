import { useState } from 'react';

function BookCreator( { onCreate }) {
    const [title, setTitle] = useState('');
    
    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return ( 
        <div> 
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={handleChange}/>
                <button>Create Book</button>
            </form>
        </div>
    );
}

export default BookCreator;