import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Photos from "../../components/carousel";
import Intro from "../../components/intro";

function Home() {
  return (
    <Container className="py-3 px-0">
      <Row>
        <Col xs={12} md={7}>
          <Intro />
        </Col>
        <Col xs={12} md={5}>
          <Photos />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
