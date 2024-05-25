import '../style/home.css';
import { ProductData } from '../data/data';
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col,Image } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../components/footer';
import AccessoryZone from './AccessoryZone';
function Home() {
    const duoFashion = useNavigate();
    const kidsSection = useNavigate();
    return (
        <>
        <Header />
        <Container fluid style={{marginTop: '2vh', marginBottom: '2vh'}}> 
            <Row >
                <Col>
                    <Carousel style={{  alignSelf: 'center', display: 'block', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', marginTop: '20px'}}>
                        <Carousel.Item interval={1000}>
                            <Image src={require('../image/banner1.jpg')} fluid />
                                <Carousel.Caption>
                                <h3>beautyfull Day</h3>
                                <p> May your day be filled with more moments of beauty and wonder! 😊🌸.</p>
                                </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <Image src={require('../image/banner2.jpg')} fluid />
                            <Carousel.Caption>
                            <h3>summer outfit
                            </h3>
                            <p>The beauty sought in the divine is hidden within summer dresses.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={require('../image/banner3.jpg')} fluid />
                            <Carousel.Caption>
                            <h3>Accessory Avenue</h3>
                            <p>
                                Your Destination for Stylish Accessories.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                       
                        <Carousel.Item>
                            <Image src={require('../image/banner5.jpg')} fluid />
                            <Carousel.Caption>
                            <h3>Best shoues in the World</h3>
                            <p>
                            Best Shoues and Best price and best quality of the shoues.
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>                   
                </Col>
            </Row>
            <Row>
            {/*style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '15px', marginBottom: '15px'}} */}
                <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', marginTop: '20px' }} >
                    <Card style={{ width: '18rem'}} onClick={()=>duoFashion('/duofashionensembles')}>
                        <Card.Img variant="top" src={require('../image/card1.jpg')} />
                        <Card.Body>
                            <Card.Title>Men and Women</Card.Title>
                            <Card.Text>
                                Explore matched Duo Fashion Ensembles, ideal for style-syncing couples, enhancing coordination and fashion harmony effortlessly.
                            </Card.Text>
                            <Button variant="dark">Show More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px',marginTop: '20px' }} >
                <Card style={{ width: '17rem'}} onClick={()=>kidsSection('/kids')}>
                    <Card.Img variant="top" src={require('../image/card2.jpg')} />
                    <Card.Body>
                        <Card.Title>Kids Corner</Card.Title>
                        <Card.Text>       
                            Curated selection of trendy and comfortable fashion for kids, offering playful styles and quality essentials for every occasion.
                        </Card.Text>
                        <Button variant="dark">Show More</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px',marginTop: '30px' }} >
            <Card style={{ width: '18rem'}} onClick={()=>AccessoryZone('/AccessoryZone')}>
                    <Card.Img variant="top" src={require('../image/card3.jpg')} />
                    <Card.Body>
                        <Card.Title>Accessory Zone</Card.Title>
                        <Card.Text>
                            Discover a wide range of stylish accessories for every occasion at Accessory Zone, where fashion meets function effortlessly.
                        </Card.Text>
                        <Button variant="dark">Show More</Button>
                    </Card.Body>
                </Card>  
            </Col>
            <Col style={{display: 'flex', alignItems: 'left', justifyContent: 'left', marginBottom: '30px',marginTop: '30px' }} >
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={require('../image/Shoues1.jpg')} />
                    <Card.Body>
                        <Card.Title>Shoes Zone</Card.Title>
                        <Card.Text>
                        Step into the future with sleek, stylish sneakers that blend comfort and durability.
                        </Card.Text>
                        <Button variant="dark">Show More</Button>
                    </Card.Body>
                </Card>   
            </Col>
            </Row>         
        </Container>
        </>
    )
}
export default Home;