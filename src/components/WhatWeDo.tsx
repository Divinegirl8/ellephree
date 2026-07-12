import Reveal from "./Reveal"


export default function WhatWeDo() {
  return (
    <section className="act alt" id="what-we-do">
    <div className="wrap">
      <div className="callsheet ">
        <Reveal delay={250}>
        <div className="act-head">
          <span className="eyebrow">Act IV — What We Do</span>
          <h2>Today's call sheet.</h2>
        </div>
        </Reveal>
        <Reveal delay={300}>
        <div className="callsheet-grid">
          <div className="cs-item"><span className="leaf">❧</span> Production Management</div>
          <div className="cs-item"><span className="leaf">❧</span> Event Planning &amp; Execution</div>
          <div className="cs-item"><span className="leaf">❧</span> Theatre Productions</div>
          <div className="cs-item"><span className="leaf">❧</span> Film Productions</div>
          <div className="cs-item"><span className="leaf">❧</span> Creative Project Management</div>
          <div className="cs-item"><span className="leaf">❧</span> Creative Consulting</div>
          <div className="cs-item"><span className="leaf">❧</span> Arts Management</div>
          <div className="cs-item"><span className="leaf">❧</span> Youth Mentorship &amp; Capacity Building</div>
          <div className="cs-item"><span className="leaf">❧</span> Creative Workshops &amp; Training</div>
          <div className="cs-item"><span className="leaf">❧</span> Lifestyle Experiences</div>
        </div>
        </Reveal>
      </div>
    </div>
  </section>
  );
}
