import React, {useState}from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';

function TextManupulation() {
    const [textArea,setTextArea] = useState("")

    const upCaseConvert = ()=> {
        // console.log("you are click here for convert into uppercase");
        let upText = textArea.toUpperCase();
        setTextArea(upText);
    }
    const toLowerCaseConvert = ()=> {
        // console.log("you are click here for convert into uppercase");
        let upText = textArea.toLowerCase();
        setTextArea(upText);
    }
    const handleOnChange =(e)=> {
        // console.log("on chnage");
        setTextArea(e.target.value)
    }
    const toCopyConvert =()=> {
        let textArea = document.getElementById("textNew");
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
    }
    return (
        <>
            <div className='cst-background-text py-5'>
                <Container>
                    <h1 className="text-center text-white">Text Manupulation</h1>
                    <Row className='my-5'>
                        <Form>
                            <textarea id='textNew' className='cst-text-area' value={textArea} onChange={handleOnChange} rows={10}>
                            </textarea>
                            <h3 className='text-white'>Total ={textArea.split(" ").length} words and ={textArea.length} charters here with read for minute{0.008 * textArea.split(" ").length}</h3>
                        </Form>
                        <div className='inline-block'>
                            <Button variant="light" onClick={upCaseConvert}>Uppercase</Button>{' '}
                            <Button variant="light" onClick={toLowerCaseConvert}>Lowercase</Button>{' '}
                            <Button variant="light" onClick={toCopyConvert}>Copy</Button>{' '}
                            <Button variant="light">Titlecase</Button>{' '}
                            <Button variant="light">Remove Extra Space</Button>{' '}
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}


export default TextManupulation;