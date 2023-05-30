import React from 'react';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Navbar/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    <Col lg={6}>
                        <Outlet />
                    </Col>

                    <Col lg={3}>
                        <RightNav>
                            
                        </RightNav>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;