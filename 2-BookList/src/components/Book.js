import React from 'react';
import Image from '../components/Image';
import Title from './Title';
import Author from './Author';

const Book = () => {
    return (
        <div>
            <article className='book'>
                <Image />
                <Title />
                <Author />
            </article>
        </div>
    )
};

export default Book;