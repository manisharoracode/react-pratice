import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const Details = () => {

    const [skills, setSkills] = useState([])
    const [state, setState] = useState({

        fname: "",
        lname: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        currentadd: "",
        permadd: "",
        city: "",
        staten: "",
        country: "",
        message: "",


    });
    //Multiple checkbox

    const getSkills = (e) => {
        const { value, checked } = e.target

        console.log(`${value} is ${checked}`)

        if (checked) {
            setSkills([...skills, value])
        } else {
            setSkills(skills.filter((e) => e !== value))
        }

        // setSkills({
        //     ...skills,
        //     [e.target.name]: value
        // });
    }
    var skillvalue = []
    skillvalue.push(...skills)
    state.skills = skillvalue


    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    console.log("state", state)

    const saveData = (e) => {
        e.preventDefault();

        fetch("http://localhost:3004/details", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn("resp", resp)
            })
        })
    }

    const [loginData, setLogindata] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var todayDate = new Date().toISOString().slice(0, 10);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login")
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setLogindata(user);

            const userbirth = loginData.map((el, k) => {
                return el.date === todayDate
            });

            // if (userbirth) {
            //     setTimeout(() => {
            //         handleShow();
            //     }, 3000)
            // }

        }
    }

    useEffect(() => {

        Birthday();

    }, []);

    return (
        <>
            {
                loginData.length === 0 ? "error" :
                    <>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Container >
                            <Form className='my-5'>
                                <h2 className='pb-3'>New User Details</h2>
                                <Row>
                                    <Col md={6}>    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" onChange={handleChange} name="fname" placeholder="Enter your first name" />

                                    </Form.Group></Col>
                                    <Col md={6}>     <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" onChange={handleChange} name="lname" placeholder="Enter your last name" />

                                    </Form.Group></Col>
                                    <Col md={6}>    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" onChange={handleChange} name="email" placeholder="Enter your email" />

                                    </Form.Group></Col>
                                    <Col md={6}>     <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="tel" name="phone" onChange={handleChange} placeholder="Enter your phone number" />

                                    </Form.Group></Col>
                                    <Col md={6}>     <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Select Gender</Form.Label><br></br>
                                        <Form.Check inline label="Male" name="gender" value="male" type="radio" aria-label="radio 1" onChange={handleChange} />
                                        <Form.Check inline label="Female" name="gender" value="female" type="radio" aria-label="radio 1" onChange={handleChange} />

                                    </Form.Group></Col>
                                    <Col md={6}>     <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control type="date" name="dob" placeholder="Enter your phone number" onChange={handleChange} />

                                    </Form.Group></Col>
                                    <Col md={6}>    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Current Address</Form.Label>
                                        <Form.Control as="textarea" name="currentadd" rows={3} onChange={handleChange} />

                                    </Form.Group></Col>
                                    <Col md={6}>     <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Permanent Address</Form.Label>
                                        <Form.Control as="textarea" name="permadd" rows={3} value={state.permadd} onChange={handleChange} />

                                    </Form.Group></Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Select City</Form.Label>
                                            <Form.Select name="city" onChange={handleChange}>
                                                <option>Please Select</option>
                                                <option>Agra</option>
                                                <option>Gurgaon</option>
                                                <option>New Delhi</option>
                                                <option>Varanasi</option>
                                                <option>Srinagar</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Select State</Form.Label>
                                            <Form.Select name="staten" onChange={handleChange}>
                                                <option>Please Select</option>
                                                <option>Uttar Pradesh</option>
                                                <option>Delhi</option>
                                                <option>Madhya Pradesh</option>
                                                <option>Himachal Pradesh</option>
                                                <option>Punjab</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Select Country</Form.Label>
                                            <Form.Select name="country" onChange={handleChange}>
                                                <option>Please Select</option>
                                                <option>India</option>
                                                <option>Pakistan</option>
                                                <option>Malaysia</option>
                                                <option>Mexico</option>
                                                <option>Iceland</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>     <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={2} placeholder="Type your message here.." name="message" onChange={handleChange} />

                                    </Form.Group></Col>
                                    <Col md={6}>
                                        <Form.Label>Skills</Form.Label><br />
                                        <Form.Check
                                            inline
                                            label="HTML"
                                            value="HTML"
                                            name="skills"
                                            type="checkbox"
                                            onChange={(e) => getSkills(e)}
                                        />
                                        <Form.Check
                                            inline
                                            label="CSS"
                                            value="CSS"
                                            name="skills"
                                            type="checkbox"
                                            onChange={(e) => getSkills(e)}
                                        />
                                        <Form.Check
                                            inline
                                            label="BOOTSTRAP"
                                            value="BOOTSTRAP"
                                            name="skills"
                                            type="checkbox"
                                            onChange={(e) => getSkills(e)}
                                        />

                                    </Col>
                                    <Col md={6} className="mb-3"></Col>

                                    <Col md={6} className="mt-4">
                                        <Button as="input" type="submit" value="Cancel" variant="danger" />{' '}
                                        <Button as="input" type="submit" value="Submit" onClick={saveData} />{' '}
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </>
            }
        </>
    );
}

export default Details;


