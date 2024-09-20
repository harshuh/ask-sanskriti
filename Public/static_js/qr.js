import QRCode from "qrcode";
import { nanoid } from "nanoid"; // Import nanoid

// createing random qr for tickets by using nanoid module
export const id = nanoid(8);
let data = {
  name: "National Science Museum",
  uid: id,
  noVisit: "",
};
let stJson = JSON.stringify(data.uid);
QRCode.toFile("qr.png", stJson, (err) => {
  if (err) return console.log("error");
  console.log("QR code generated successfully.");
});
