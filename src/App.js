import QRGenerator from "./component/QRGenerator";
// Get the route path from the url
import { useParams } from "react-router-dom";

import "./App.css";

function App() {
  const params = useParams();
  const qrParam = params.qrCode;
  //console.log(params);

  return (
    <div className="app">
      <div className="container">
        <a target="_blank" rel="noreferrer" href={qrParam ? qrParam : "https://www.frontendmentor.io"}>
        <div className="qr-code-holder">
          <QRGenerator value={qrParam ? qrParam : "https://www.frontendmentor.io"} />
          </div>
        </a>
        <h2>Improve your front-end skills by building projects</h2>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;
