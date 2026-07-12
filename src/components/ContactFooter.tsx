

export default function ContactFooter() {
  return (
    <footer className="curtain-call" id="contact">
    <div   className="curtain-row"
  aria-hidden="true"
  style={{
    position: "absolute",
    top: "-1px",
    left: 0,
    width: "100%",
  }}
>
      <svg viewBox="0 0 200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 H200 V50 Q175,80 150,50 Q125,80 100,50 Q75,80 50,50 Q25,80 0,50 Z" fill="#faf6ef"/>
      </svg>
      <svg viewBox="0 0 200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 H200 V50 Q175,80 150,50 Q125,80 100,50 Q75,80 50,50 Q25,80 0,50 Z" fill="#faf6ef"/>
      </svg>
    </div>
    <div className="cc-inner">
      <span className="eyebrow ">Curtain Call</span>
      <h2>Create. Manage. Inspire.</h2>
      <div className="contact-grid">
        <div className="contact-card ">
          <span className="eyebrow">Phone</span>
          <a href="tel:+2349114841949">+234 9114 841 949</a>
        </div>
        <div className="contact-card ">
          <span className="eyebrow">Email</span>
          <a href="mailto:ellephree@gmail.com">ellephree@gmail.com</a>
        </div>
        <div className="contact-card ">
          <span className="eyebrow">Website</span>
          <a href="https://www.ellephree.org">www.ellephree.org</a>
        </div>
      </div>
      <div className="cc-bottom">
        <span>© 2026 Ellephree Creations</span>
        <span>Lagos, Nigeria</span>
      </div>
    </div>
  </footer>
  );
}
