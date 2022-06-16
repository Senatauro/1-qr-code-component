import QRGenerator from "./component/QRGenerator";

import qr from "./images/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="qr-code-holder">
          <QRGenerator value="https://www.google.com" />
        </div>
        <h2>Improve your front-end skills by building projects</h2>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;
