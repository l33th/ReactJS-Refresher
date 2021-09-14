import React from 'react';
import Book from './components/Book';
// CSS
import './index.css';

const App = () => {
    return (
        <section className='bookList'>
            <Book />
            <Book />
        </section>
    );
};

export default App;