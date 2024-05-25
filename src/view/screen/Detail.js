import { Col, Container, Row, Image } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/footer"
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { bestSeller , addtocart} from "../data/data";
import Card from 'react-bootstrap/Card';
import {useLocation, useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";


function Detail() {
    
    const loc = useLocation();
    const add = useNavigate();

    const [ProductDetails, setProductDetails] = useState('');

    useEffect(()=>{
        console.log(loc.state);
        setProductDetails(loc.state)
        
    },[])

    const [img, setImage] = useState('');
    function imageChange(img) {
        setImage(img)
    }
    
    console.log(ProductDetails)
    function addToCart() {
        console.log('add to cart');
        addtocart.push(ProductDetails)
        add('/addtocart', {state: ProductDetails})
    }
    return (
        <Container fluid>
            <Header />
            <Row style={{marginTop:'2vh', marginBottom:'2vh'}}>
                <Col lg={6}>
                    <Image src={img?img:ProductDetails.img} fluid />

                    <Row>
                        {
                            ProductDetails&&ProductDetails.sideimage.map(img=>(
                                <Col onClick={()=>imageChange(img)}>
                                    <Image src={img} style={{width:115, height: 115, marginTop: '60px' }} fluid />
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
                <Col lg={6} style={{marginTop: '20px'}}> 
                    <Row>
                        <Col>
                            <p>{ProductDetails.name}</p>
                        </Col>
                        <Col>
                            <p>RS {ProductDetails.price}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <Image src={require('../image/star.jpg')} style={{width: 20}} />
                            <Image src={require('../image/star.jpg')} style={{width: 20}} />
                            <Image src={require('../image/star.jpg')} style={{width: 20}} />
                            <Image src={require('../image/star.jpg')} style={{width: 20}} />
                            <Image src={require('../image/star.jpg')} style={{width: 20}} />
                            <span> {ProductDetails.rating} review</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Size</p>
                            <Row>
                                <Col>
                                    {
                                        ProductDetails&&ProductDetails.size.map(d=>(
                                            <Button variant="outline-dark" style={{marginLeft: 10}}>{d}</Button>
                                        ))
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Accordion defaultActiveKey="1" style={{marginTop: '20px'}}>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Size Chart</Accordion.Header>
                                            <Accordion.Body>
                                                <Image src={require('../image/sizeChart.jpg')} fluid />
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col style={{marginTop: '20px'}}>
                            <p>Colours</p>
                            {
                                ProductDetails&&ProductDetails.color.map(d=>(

                                    <Button style={{width: 40, height: 40, backgroundColor:`${d}`, marginLeft: 10}}>{''}</Button>
                                ))
                            }
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginTop: '20px'}}>
                            <Button variant="outline-dark" style={{width: '100%', height: '5vh', marginTop: '20px'}} onClick={addToCart}>Add To Cart</Button>
                            <Button variant="dark" style={{width: '100%', marginTop: '10px', height: '5vh'}}>Buy Now</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginTop: '20px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"/>
                         </svg>
                         20% Bank Offer10% Instant Discount on BOBCARD Transactions, up to ₹1,000 on orders of ₹7,500 and above T&C
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginTop: '20px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"/>
                         </svg>
                         Bank Offer10% off on Citi-branded Credit Card EMI Transactions, up to ₹2,000 on orders of ₹5,000 and above T&C
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginTop: '20px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z"/>
                         </svg>
                         Special PriceGet at flat ₹348 T&C
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginTop:  '60px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/> 
                        </svg>
                        Deliver to                    
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginTop:  '60px'}}>
                        <div class="form-floating">
                       <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                       <label for="floatingTextarea">Comments</label>
                        </div>                   
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{marginTop:  '60px'}}>
                            </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h3>Our Best Selling Products</h3>
                </Col>
                <Row>
                    {
                        bestSeller.map(value=>(
                            <Col lg={4} style={{marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={value.img} />
                                    <Card.Body>
                                        <Card.Title style={{fontSize: 16}}>{value.name}</Card.Title>
                                        <Button variant="primary">Add To Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Row>
            <Row>
                  <Col style={{marginBottom: '2vh', marginTop: '20px'}}>
                   
                  </Col>
            </Row>

            <Footer />
        </Container>
    )
}

export default Detail;