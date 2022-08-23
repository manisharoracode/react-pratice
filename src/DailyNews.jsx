import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NewsItem from './NewsItem';

function DailyNews() {
    return (
        <>
            <Container className='my-5'>
                <h1 className='text-center'>DailyNews</h1>
                <Row>
                    <NewsItem />
                </Row>
            </Container>
        </>
    )
}

export default DailyNews;