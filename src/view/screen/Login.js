import { useState } from "react";
import Header from "../components/Header";
import {Container, Row, Col} from 'react-bootstrap'
import { Form, Button } from "react-bootstrap";

function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isEmail=(event)=>{
        setEmail(event.target.value)
    }
    const isPassword = (event) => {
        setPassword(event.target.value)
    }
    const onPressLogin = () => {
        console.log("login");
        console.log(email);
        console.log(password);

        const dataPush = {
            email: email,
            password: password
        }
        console.log(dataPush);
        localStorage.setItem("user", dataPush);

        setEmail('')
        setPassword('')
        window.location = "/"
    }

    return (
        <>
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
                            scale: '1.2',
                            borderRadius: '15px',
                            boxShadow: '10px 10px 20px #000',
                            width: '500px'
                        }}>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={isEmail} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={isPassword} />
                            </Form.Group>
                            <Button variant="dark" type="button" onClick={onPressLogin}>Submit</Button>
                          
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;