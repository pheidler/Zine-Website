import BuyMeACoffee from "components/BuyMeACoffee";
import ZineList from "components/ZineList";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../components/style.module.css";

function Home(props) {
  return (
    <Container fluid className={styles.homeContent}>
      <Row className={styles.topSpace} />
      <Row>
        <Col xs={1} />
        <Col xs={10}>
          <ZineList />
        </Col>
        <Col xs={1} />
      </Row>
      <Row className={styles.bottomSpace} />
    </Container>
  );
}
export default Home;
