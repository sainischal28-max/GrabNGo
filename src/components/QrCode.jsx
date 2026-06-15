import QRCode from 'react-qr-code'

export default function QrCode({ value }) {
  return (
    <div className="qr-wrap">
      <QRCode value={value || 'GrabNGo'} size={128} />
    </div>
  )
}
