import { Container, Row, Col, Image } from "react-bootstrap";
import Header from '../components/Header'

function About() {
    <Container fluid>
        <Header />
        <Row>
            <Col>
                <Image src={require("../image/AdoutBanner.jpg")} style={{width:'100%', height:'85%', marginTop:'2vh'}}/>
            </Col>
        </Row>
    </Container>
}

export default About;