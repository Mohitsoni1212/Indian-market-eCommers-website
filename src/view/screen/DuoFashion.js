import Header from '../components/Header';
import FilterSection from '../components/filter';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

import { Container, Row, Col } from 'react-bootstrap';
import {coupleDress} from '../data/data'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';


function DuoFashion() {
    
    const detail = useNavigate();

    const [duoDress, setDuoDress] = useState('');

    useEffect(()=>{
        setDuoDress(coupleDress)
    },[])
    
    
    return (
        <Container fluid>
            <Header />
            <FilterSection />
            <Row>
                {
                    duoDress&&duoDress.map(value=>(
                                <Col onClick={()=>detail('/details', {state: value})} lg={3} md={6} sm={6} style={{marginTop: '20px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                    <Card style={{ width: '18rem', height: 'auto' }}>
                                        <Card.Img variant="top" src={value.img} />
                                        <Card.Body>
                                            <Card.Title style={{fontSize: 16}}>{value.name}</Card.Title>
                                            <span>
                                                <p><del style={{marginRight: '15px'}}>RS: 1299</del> <span style={{backgroundColor: '#FBC63E', padding:'6px 12px', borderRadius: '8px'}}>RS: 999</span></p>
                                            </span>
                                            <Button variant="Black">Add To Cart</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default DuoFashion;