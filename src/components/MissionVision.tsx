import Reveal from "./Reveal";


export default function MissionVision() {
  return (
    <section className="act alt" id="mission">
    <div className="wrap">
    <Reveal delay={120}>
      <div className="act-head ">
        <span className="eyebrow">Act II — Mission &amp; Vision</span>
        {/* <h2>Two pages of the same programme.</h2> */}
      </div>
      </Reveal>

      <Reveal delay={120}>
      <div className="book ">
        <div className="page mission">
          <span className="eyebrow">Our Mission</span>
          <h3>Empowering emerging creatives.</h3>
          <p>To deliver innovative, professionally managed creative projects while empowering emerging creatives through mentorship, capacity-building, and opportunities that foster leadership, entrepreneurship, and sustainable careers in the creative industry.</p>
        </div>
        <div className="page vision">
          <div className="fold"></div>
          <span className="eyebrow">Our Vision</span>
          <h3>A leading creative organisation in Africa.</h3>
          <p>To become a leading creative organisation in Africa, recognised for excellence in production, creative leadership, arts management, and youth empowerment.</p>
        </div>
      </div>
      </Reveal>
    </div>
    
  </section>
  );
}
