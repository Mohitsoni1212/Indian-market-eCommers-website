import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function filter() {
    return(
        <Container fluid>
           
            <Row>
                <Col style={{display: 'flex', alignItems:'center', justifyContent:'space-between', marginLeft: '12px', marginTop:'2vh'}}>
                    <p style={{marginRight:'30px'}}>Filter:</p>
                    <Dropdown>
                        <Dropdown.Toggle style={{marginRight:'30px'}} variant="light" id="dropdown-basic">
                            Availability
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{padding:'10px'}}>
                            <Form.Check aria-label="option 1" label="In Stock (50)"/>
                            <Form.Check aria-label="option 2" label="Out Of Stock (10)"/>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Price
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{padding:'10px', width:'400px'}}>
                            <p>The highest price is Rs. 1,799.00 <span style={{textDecoration:'underline', cursor:'pointer'}}>Reset</span></p>
                            <hr/>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1" style={{backgroundColor:'#fff'}}>₹</InputGroup.Text>
                                    <Form.Control 
                                    aria-label="Username"
                                    style={{width:'20px'}}
                                    />
                                </InputGroup>
                                
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1" style={{backgroundColor:'#fff'}}>₹</InputGroup.Text>
                                    <Form.Control 
                                    aria-label="Username"
                                    style={{width:'20px'}}
                                    />
                                </InputGroup>    
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown style={{
                        display:'flex',
                        alignItems: 'flex-end',
                    }}>
                        <h4 style={{marginRight:'20px', fontSize: '16px'}}>Sort by:</h4>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginRight:'20px'}}>
                            Featured
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Best Selling</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Alphabatically A-Z</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Alphabatically Z-A</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Price, low to high</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Price, high to low</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Date, old to new</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Date, new to old</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <p style={{marginTop:'2vh', marginLeft: '20px'}}>20 Products</p>
                </Col>
            </Row>
        </Container>
    )
}

export default filter;