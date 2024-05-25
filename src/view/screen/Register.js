import {Container, Row, Col} from 'react-bootstrap'
import Header from '../components/Header';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const isName = (e) => {
        setName(e.target.value)
    }
    const isEmail = (e) => {
        setEmail(e.target.value)
    }
    const isPassword = (e) => {
        setPassword(e.target.value)
    }
    const isConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    const onPress = () => {
        console.log('Register');
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(confirmPassword);

        const dataPush = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        console.log(dataPush);

        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <Container fluid>
            <Header />
                <Row>
                    <Col style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '18vh',
                        width: '450px',
                    }}>
                        <Form style={{
                            backgroundColor: '#fff',
                            padding: '25px 50px',
                            scale: '1.1',
                            borderRadius: '15px',
                            boxShadow: '10px 10px 20px #000',
                            width: '500px'
                        }}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Enter your name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Full Name" value={name} onChange={isName} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={isEmail} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={isPassword} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={confirmPassword} onChange={isConfirmPassword} />
                            </Form.Group>
                            
                            <Button variant="dark" type='button' onClick={onPress}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
        </Container>
    )
}

export default Register;