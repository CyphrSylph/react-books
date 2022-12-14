import { createContext, useState } from "react";

const BookContext = createContext();

function Provider({children}) {
    const [count, setCount] = useState(3);

    const sharedValue = {
        count,
        incrementCount: () => {
            setCount(count + 1);
        },
    };

    return (
        <BookContext.Provider value={sharedValue}>
            {children}
        </BookContext.Provider>
    );
}

export { Provider };
export default BookContext;