import React from 'react';
import BookDetail from './BookDetail';

const BookList = (props) =>{
    return (
        <>
            <ul className={classes['Book-list']}>
                {props.BookDetail.map((BookDetail) => (
                    <BookDetail
                        key={title.id}
                        title={describe.title}
                        releaseDate={bookDate.release}
                    />
                ))}
            </ul>
        </>
    )
}

export default BookList;