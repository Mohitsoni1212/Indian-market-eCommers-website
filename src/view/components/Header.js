import { useEffect, useState } from "react";
import { Container, Row, Col,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Marquee from "react-fast-marquee";

const Header = () => {
  const [user, setUser] = useState('');
  useEffect(()=>{
    setUser(localStorage.getItem('user'))
  },[])
  return (
    <>
    <Container fluid> 
      <Row>
        <Col>
          <Marquee>Welcome! We wholeheartedly welcome you to our website. Here, you’ll find valuable information and priceless content. Feel free to explore!</Marquee>
        </Col>
      </Row>
      <Row>
        <Col>
            <Navbar  style={{ fontSize: '1rem',}} className="bg-body-tertiary" >
              <Container fluid>
                <Col lg={1} md={2}>
                <Image src={require('../image/Logo.png')} fluid />
                </Col>
                <Navbar.Brand href="/home" style={{fontFamily: '"Averia Serif Libre", serif', fontSize: '30px',color:"black"}}>
                 𝖨𝗇𝖽𝗂𝖺𝗇 𝖬𝖺𝗋𝗄𝖾𝗍
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '180px' }}
                    navbarScroll
                  >

                  </Nav>
                <Nav className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '180px',fontFamily: '"Averia Serif Libre", serif'}}
                    navbarScroll
                    >
                  <h1>
   
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <Nav.Link href="/"style={{color:" black",fontSize: '25px',marginTop:'15px',left:'10px'}}>Home </Nav.Link>
                  <Nav.Link href="/product"style={{color:"black",fontSize: '25px',marginTop:'15px'}}>Product</Nav.Link>
                  <Nav.Link href="/about"style={{color:"black",fontSize: '25px',marginTop:'15px'}}>About Us</Nav.Link>
                  {
                    user ?
                    <>
                      <Nav.Link href="/logout"style={{color:"black",fontSize: '25px',marginTop:'15px'}}>Logout</Nav.Link>
                    </>
                    :
                    <>
                      <Nav.Link href="/login"style={{color:"black",fontSize: '25px',marginTop:'15px'}}>Login</Nav.Link>
                      <Nav.Link href="/register"style={{color:"black",fontSize: '25px',marginTop:'15px'}}>Register</Nav.Link>
                    </>
            
                  }
                 
               </div>
                </h1></Nav>
                <Form className="d-flex"> 
                  <Form.Control
                   style={{ maxHeight: '4rem',marginTop:'15px' }}
                    type="search"             
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  /> 
                
                  <Button variant="outline-dark" style={{ marginTop:'15px' }}>Search</Button>
                
                </Form>
              </Navbar.Collapse>
            </Container>
        </Navbar>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Header