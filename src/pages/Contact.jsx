import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-container">

        <div className="contact-info">
          <h2>Contact Us</h2>

          <div className="info-box">
            <h4>📍 Address</h4>
            <p>In front of rkbk Maruti showrooms, Mohaddipur, Gorakhpur, Uttar Pradesh 273008</p>
          </div>

          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 6393594508</p>
          </div>

          <div className="info-box">
            <h4>⏰ Working Hours</h4>
            <p>7:00 AM – 10:00 PM</p>
          </div>

          <div className="contact-buttons">
            <a 
              href="tel:6393594508" 
              className="call-btn"
            >
              Call Now
            </a>

            <a 
              href="https://wa.me/916393594508" 
              target="_blank" 
              rel="noreferrer"
              className="whatsapp-btn"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57005.73756011689!2d83.4083826!3d26.7488881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145cb978f83e1%3A0x8c78a51331c48a32!2sQureshi%20mutton%20and%20chicken%20shop!5e0!3m2!1sen!2sin!4v1771650213752!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Shop Location"
          ></iframe>
        </div>

      </div>

    </section>
  );
}

export default Contact;