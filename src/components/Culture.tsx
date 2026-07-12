import Reveal from "./Reveal"

export default function Culture() {
  return (
    <section className="act" id="culture">
    <div className="wrap">
      <Reveal delay={350}>
      <div className="pull-panel ">
        <span className="eyebrow">Act V — Culture, Achievements &amp; What's Ahead</span>
        <h2>Every project is a chance to inspire, solve problems, and leave a lasting impact.</h2>
        <p>At Ellephree, we cultivate a culture of innovation, professionalism, continuous learning, and service — encouraging curiosity, collaboration, and excellence while nurturing talents that can shape the future of the creative industry.</p>
      </div>
      </Reveal>

      <Reveal delay={400}> 
      <div className="triad">
  
        <div className="triad-card ">
          <span className="eyebrow">Our Culture</span>
          <h3>Curiosity, kept close.</h3>
          <p>A working culture built on continuous learning and service, where collaboration is the default and excellence is the standard.</p>
        </div>
      
        <div className="triad-card ">
          <span className="eyebrow">Our Achievements</span>
          <h3>A growing ecosystem.</h3>
          <p>Meaningful collaborations across theatre, film, education, and community engagement — strengthening the creative ecosystem through production management and creative leadership.</p>
        </div>
        <div className="triad-card ">
          <span className="eyebrow">Looking Ahead</span>
          <h3>Creativity meets enterprise.</h3>
          <p>Through strategic partnerships, mentorship programmes, and community-driven initiatives, we're nurturing a new generation equipped to lead, innovate, and make meaningful contributions.</p>
        </div>
      </div>
      </Reveal>
    </div>
  </section>
  );
}
