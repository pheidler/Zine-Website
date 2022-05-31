import ZineList from "components/ZineList";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

// Styles
const TopSpace = styled(Row)`
  height: 40px;
`;

const HomeContainer = styled(Container)`
  background-color: #bec6fe;
  height: 100vh;
`;

function Home(props) {
  return (
    <HomeContainer fluid>
      <TopSpace />
      <Row>
        <Col xs={1} />
        <Col xs={10}>
          <ZineList />
        </Col>
        <Col xs={1} />
      </Row>
      <Row />
    </HomeContainer>
  );
}
export default Home;
