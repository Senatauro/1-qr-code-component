import QRCode from "react-qr-code";

export default function QRGenerator(props) {
  return (
    <div>
      <QRCode
              value={props.value}
              size={160}
              bgColor="#2B7DFA"
              fgColor="#FFFFFF"
          />
        </div>
    );
}
      