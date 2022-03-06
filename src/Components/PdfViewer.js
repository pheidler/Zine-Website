import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Paper from "@mui/material/Paper";

function PdfViewer(props) {
  const file = props.file;
  const [numPages, setNumPages] = useState(null);

  return (
    <Paper elevation="4" className="paper-pdf-viewer">
      <Document
        className="pdfDocument"
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => (
            <Page pageNumber={page} key={page} />
          ))}
      </Document>
    </Paper>
  );
}

export default PdfViewer;
