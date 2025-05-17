import React from 'react';
import './home.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useNavigate } from 'react-router-dom';

// images
import panCorner from '../../assets/heroSectionAssets/paan-corner.png';
import pharmacy from '../../assets/heroSectionAssets/pharmacy-WEB.jpg';
import petCare from '../../assets/heroSectionAssets/Pet-Care_WEB.jpg';
import baby from '../../assets/heroSectionAssets/babycare-WEB.jpg';


function Home() {
    const navigate = useNavigate();

    const paanImageNavigate = () => {
        navigate('/paanCornerPage');
    }
    const pharmacyImageNavigate = () => {
        navigate('/pharmacyPage');
    }
    const petImageNavigate = () => {
        navigate('/petCarepage');
    }
    const babyImageNavigate = () => {
        navigate('/babyCarepage');
    }

    return (
        <Container id='home' className='outerSection'>
            <Row>
                <Col lg={12}>
                    <img src={panCorner} alt="Paan Corner" className="img-fluid" onClick={paanImageNavigate} />
                </Col>
            </Row>
            <Row className="mt-3 ms-2 caringTab col-lg-10">
                <Col>
                    <img src={pharmacy} alt="Pharmacy" onClick={pharmacyImageNavigate} />
                </Col>
                <Col>
                    <img src={petCare} alt="Petcare" onClick={petImageNavigate}/>
                </Col>
                <Col>
                    <img src={baby} alt="BabyCare" onClick={babyImageNavigate}/>
                </Col>
            </Row>
            <Row className="items-first-row mt-4 ">
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-8_4.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-9_3.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png" alt="img" />
                </Col>
            </Row>
            <Row className="items-second-row mt-3">
                <Col className="ps-0">
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-11.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-12.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-13.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-14.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-15.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-16.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-18.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-19.png" alt="img" />
                </Col>
                <Col>
                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-20.png" alt="img" />
                </Col>
            </Row>
        </Container>
    )
}
export default Home;