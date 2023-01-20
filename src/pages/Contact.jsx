import BookingForm from "../components/BookingForm";
import ownerImage from "../assets/images/owner.png";
import mapImage from "../assets/images/map.png";

export default function Contact() {
  return (
    <div className="contact container">
      <img src={ownerImage} className="main-image" alt="" />
      <h3>Opening times</h3>
      <p className="timing">
        <span>Monday to Friday: </span>
        <span>09:00 AM - 08:00 PM</span>
      </p>
      <p className="timing">
        <span>Saturday and Sunday: </span>
        <span>09:00 AM - 05:00 PM</span>
      </p>

      <h3>Book a table</h3>
      <BookingForm />

      <h3>Address</h3>
      <p>Luddingsbo Mekanikusv 76</p>
      <p>Stockholm, Sweden.</p>
      <img src={mapImage} className="map" alt="" />
    </div>
  );
}
