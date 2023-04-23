import { Zines } from "./helper/Constants";
import React, { useEffect, useRef, useState } from "react";
import throttle from "lodash/throttle";
import { Col, Container, Row } from "react-bootstrap";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Download } from "react-bootstrap-icons";

const ZinePage = styled(Page)`
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const BackgroundContainer = styled(Container)`
  background-color: #dddddd;
`;

const RoundedContainer = styled.div`
  height: 40px;
  width: 40px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -khtml-border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: lightcyan;
    cursor: pointer;
  }
`;

// @ts-ignore
const DownloadIcon = styled(Download)`
  width: 50%;
  height: 50%;
  margin: auto;
  color: black;
  stroke: 10px;
`;

const DownloadButton = styled.div`
  position: fixed;
  right: 30px;
  bottom: 100px;
`;

function PdfViewer(props) {
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
  const fileName = props.file;
  const matches = Zines.filter((zine) => zine.path === fileName);
  const file = matches[0]?.file;
  const zine = matches[0];

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
    <>
      <BackgroundContainer fluid>
        <Row>
          <Col xs={2} md={4} />
          <Col xs={8} md={4} ref={pdfWrapper}>
            <Document
              file={file}
              loading=""
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
              {Array.apply(null, Array(numPages))
                .map((x, i) => i + 1)
                .map((page) => (
                  <ZinePage
                    loading=""
                    pageNumber={page}
                    key={page}
                    width={initialWidth}
                  />
                ))}
            </Document>
          </Col>
          <Col xs={2} md={4} />
        </Row>
        <DownloadButton>
          <a href={zine.file} download={`${zine.path}.pdf`}>
            <RoundedContainer>
              <DownloadIcon />
            </RoundedContainer>
          </a>
        </DownloadButton>
      </BackgroundContainer>
    </>
  );
}

export default PdfViewer;
