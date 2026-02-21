import './styles/Map.css'

export default function Map() {
  return (
    <section id="map" className="map-section">
      <div className="container">
        <h2>Find Us</h2>
        <p className="section-subtitle">Visit our office or contact us for transportation quotes</p>
        <div className="map-container">
          <iframe
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95592341546572!3d-37.816279927758206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf00ef62049ee30!2s123%20Main%20Street%2C%20Melbourne%2C%20VIC%203000!5e0!3m2!1sen!2sau!4v1623052800000"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2729.942639425732!2d77.05379680747087!3d28.498268448829375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soffice%20no%2022%2C%20carterpuri%20road%20transport%20area%20sector%2018%20gurugram!5e0!3m2!1sen!2sin!4v1771604902786!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2729.942639425732!2d77.05379680747087!3d28.498268448829375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soffice%20no%2022%2C%20carterpuri%20road%20transport%20area%20sector%2018%20gurugram!5e0!3m2!1sen!2sin!4v1771604902786!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <div className="location-info">
            <h3>Our Office</h3>
            <p><strong>Address:</strong> Office No- 22, Carterpuri Road, Transport Area, Sector -18, Gurgaon 122001, Haryana</p>
            <p><strong>Phone:</strong> +91 9996205357</p>
            <p><strong>Email:</strong> info@anchorshipping.com</p>
            <p><strong>Hours:</strong> Open 24/7</p>
          </div>
        </div>
      </div>
    </section>
  )
}
