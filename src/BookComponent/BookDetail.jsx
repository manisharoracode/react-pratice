import React from 'react';

const BookDetail = (props) =>{
    return (
        <>
            <li className={classes.Book}>
                <h2>{props.title}</h2>
                <p>{props.describe}</p>
                <p>{props.bookDate}</p>
            </li>
        </>
    )
}

export default BookDetail;