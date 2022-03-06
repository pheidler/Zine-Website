import PdfViewer from "./Components/PdfViewer.js";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import CssBaseline from "@mui/material/CssBaseline";
import pdfFile from "./resources/FinanceZine.pdf";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <PdfViewer file={pdfFile} className="pdf-viewer-component" />
      <Footer />
    </div>
  );
}

export default App;
