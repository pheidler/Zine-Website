import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

function PdfViewer(props) {
  const file = props.file;
  const [numPages, setNumPages] = useState(null);

  return (
    <Document
      file={file}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
    >
      {Array.apply(null, Array(numPages))
        .map((x, i) => i + 1)
        .map((page) => (
          <Page pageNumber={page} key={page} />
        ))}
    </Document>
  );
}

export default PdfViewer;
