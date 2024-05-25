import {Container, Row, Col} from 'react-bootstrap'
import Header from '../components/Header';
import Footer from '../components/footer';
import { Shop } from '../data/shop';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';


function Product() {
    const nav = useNavigate()
    const [shopName, setShop] = useState('');

    useEffect(()=>{
        console.log(shopName);
        setShop(Shop)
    },[]);

    
    return (
        <>
            <Container fluid>
                <Header />
                <Row>
                        {
                            shopName&&shopName.map(value=>(
                                <Col onClick={()=>nav('/details', {state: value})} lg={3} md={6} sm={6} style={{marginTop: '20px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={value.img} />
                                        <Card.Body>
                                            <Card.Title style={{fontSize: 16}}>{value.name}</Card.Title>
                                            <span>
                                                <p><del style={{marginRight: '15px'}}>RS: 1299</del> <span style={{backgroundColor: '#FBC63E', padding:'6px 12px', borderRadius: '8px'}}>RS: 999</span></p>
                                            </span>
                                            <Button variant="dark">Add To Cart</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    
                </Row>
                <Footer />
            </Container>
        </>
    )
}

export default Product;