import ZineList from "components/ZineList";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Home(props) {
  return (
    <Container>
      <Row>
        <Col xs={1} />
        <Col xs={10}>
          <ZineList />
        </Col>
        <Col xs={1} />
      </Row>
    </Container>
  );
}
export default Home;
