import { Container, Row, Form } from 'react-bootstrap'
import { useRef } from 'react'

function AddBook(props) {
    const titleRef = useRef('');
    const descRef = useRef('');
    const dateRef = useRef('');

    function submitHander(e){
        e.preventDefault();

        const Book = {
            title : titleRef.current.value,
            describe :descRef.current.value,
            bookDate: dateRef.current.value,
    }
    props.onAddBook(Book);
   
    }
    

    return (
        <Container>
            <h1 className='text-center'>Add Book in List Below Here</h1>
            <Row>
                <Form onSubmit={submitHander}>
                <Form.Group className="mb-3">
                    <Form.Label>Add Book Title</Form.Label>
                    <Form.Control placeholder="Add Book Name" ref={titleRef} />
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-column">
                    <Form.Label>Add Book Description</Form.Label>
                    <textarea rows='5' id='opening-text' ref={descRef}></textarea>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Add Publish Book Date</Form.Label>
                    <Form.Control placeholder="Add Date Here" ref={dateRef} />
                </Form.Group>
                </Form>
            </Row>
        </Container>
    )
}


export default AddBook;