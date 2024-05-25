import { Col, Container, Row,Image,} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";



function footer() {
    return(<>
        <Container fluid>
    
          
        <div class="text-bg-info p-3">
            <Row style={{marginTop: '20px',}}>
                <Col lg={3} md={4} >
               
            
                <Image src={require('../image/Logo.png') } fluid />
                
            






                </Col>
               
                <Col lg={3} md={6} > <div class="alert alert-success" role="alert" style={{marginTop: '110px'}}>
                <h4>OUR POLICIES</h4>
                                       <div className="footer-link">
                        <a href="#">Shipping Details</a>
                        <br></br>
                        <a href="#">Return & Exchange Policy</a>
                        <br></br>
                        <a href="#">Return & Exchange Policy</a>
                        <br></br>
                        <a href="#">Order Cancellation</a>
                        <br></br>
                        <a href="#">Privacy Policy</a>
                        <br></br>
                        <a href="#">Refund Policy</a>
                    </div>
                                       </div>
                    
                  
                </Col>
                
                
                <Col lg={3} md={6} style={{marginTop: '110px',}}>
                    
                <div class="alert alert-success" role="alert " >
                    <h4 >Helpful Link</h4>
                    <div className="explore-link "style={{fontSize: '25px',marginTop:'15px'}}>
                     <a href="#">About Us</a>
                        <br></br>
                     
                       
                      <a href="#">Terms & Conditions</a>
                         <br></br>
                        <a href="#">Contact Us</a>
                         <br></br>
                        
                        
  
                    </div>
                    </div>
                    
                </Col>
                
                <Col lg={3} md={6} style={{marginTop: '110px'}}>
                <div class="alert alert-success" role="alert">
                    <h4>SIGN UP AND SAVE</h4>
                    <p>Join our community today and unlock exclusive perks! Sign up now to receive a special discount on your first purchase. Be the first to know about our latest arrivals, exclusive offers, and exciting promotions. Plus, enjoy personalized recommendations tailored just for you. Don't miss out – sign up now and start saving on your favorite fashion and lifestyle essentials!"</p>
                    </div>
                    <Form.Label htmlFor="inputPassword5">Email address</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            aria-describedby="email"
                            style={{marginBottom: '15px'}}
                        />
                        <Button variant="dark">Submit</Button>{' '}
                        
                        
                        
                </Col>
                
                
            </Row>
            </div>

        </Container>
       
        </>
    )
}

export default footer;