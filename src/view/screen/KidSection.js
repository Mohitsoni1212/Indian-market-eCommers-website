import React, { useEffect } from 'react';
import Header from '../components/Header';
import FilterSection from '../components/filter';
import { kidsData } from '../data/kidsdata';
import {Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
function KidSection() {
    const detail = useNavigate()
    const [kidDress, setKidDress] = useState('');
    
        useEffect(()=>{
            setKidDress(kidsData)
        },[])
    
        return (
            <Container fluid>
                    <Header />
                    <FilterSection />
                    <Row>
                        {
                            kidDress&&kidDress.map(value=>(
                                        <Col onClick={()=>detail('/details', {state: value})} lg={3} md={6} sm={6} style={{marginTop: '20px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                            <Card style={{ width: '18rem', height: 'auto' }}>
                                                <Card.Img variant="top" src={value.img} />
                                                <Card.Body>
                                                    <Card.Title style={{fontSize: 16}}>{value.name}</Card.Title>
                                                    <span>
                                                        <p><del style={{marginRight: '15px'}}>RS: 1299</del> <span style={{backgroundColor: '#FBC63E', padding:'6px 12px', borderRadius: '8px'}}>{value.price}</span></p>
                                                    </span>
                                                    <Button variant="dark">Add To Cart</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                            ))
                        }
                    </Row>
                </Container>
          )
}

        
      



export default KidSection;