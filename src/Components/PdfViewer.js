import { Zines } from "helper/Constants";
import React, { useEffect, useRef, useState } from "react";
import throttle from "lodash/throttle";
import { Col, Container, Row } from "react-bootstrap";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./style.module.css";

function PdfViewer(props) {
  const params = useParams();
  const navigate = useNavigate();
  const pdfWrapper = useRef(null);

  /* State */
  const [numPages, setNumPages] = useState(null);
  const [initialWidth, setInitialWidth] = useState(null);

  /* Add window resize event listener to manually resize PDF component */
  useEffect(() => {
    window.addEventListener("resize", throttle(setPdfSize, 500));
    setPdfSize();
    return () => {
      window.removeEventListener("resize", throttle(setPdfSize, 500));
    };
  }, []);

  /* Get PDF from path parameter */
  const fileName = params.title;
  const matches = Zines.filter((zine) => zine.path === fileName);
  const file = matches[0]?.file;

  /* Get PDF size from wrapper and update PDF component */
  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
    }
  };

  /* Return to homepage if file does not exist */
  if (!file) {
    navigate("/");
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={1} />
        <Col xs={10} ref={pdfWrapper}>
          <Document
            file={file}
            loading=""
            className={styles.pdfPage}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page) => (
                <Page
                  loading=""
                  pageNumber={page}
                  key={page}
                  width={initialWidth}
                />
              ))}
          </Document>
        </Col>
        <Col xs={1} />
      </Row>
    </Container>
  );
}

export default PdfViewer;
