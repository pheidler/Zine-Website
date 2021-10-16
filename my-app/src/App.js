import PdfViewer from "./Components/PdfViewer.js";
import pdfFile from "./FinanceZine.pdf";
import "./App.css";

function App() {
  return (
    <div>
      <PdfViewer file={pdfFile} />
    </div>
  );
}

export default App;
