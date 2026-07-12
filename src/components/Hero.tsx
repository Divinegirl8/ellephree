

export default function Hero() {
  return (
    
<section className="hero">
  <div className="hero-inner">
    <div className="hero-row ">
      <div className="stage-art" aria-hidden="true">
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="140" fill="none" stroke="#b9a3de" stroke-opacity="0.35" stroke-width="1.5"/>
          <path d="M150 250 C150 210, 130 200, 130 170 C130 145, 150 140, 150 115" stroke="#c3d3b6" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M150 250 C150 210, 170 200, 170 170 C170 145, 150 140, 150 115" stroke="#7f9c73" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7"/>
          <g fill="#c3d3b6">
            <ellipse cx="128" cy="188" rx="17" ry="9" transform="rotate(-30 128 188)"/>
            <ellipse cx="172" cy="188" rx="17" ry="9" transform="rotate(30 172 188)"/>
            <ellipse cx="122" cy="150" rx="15" ry="8" transform="rotate(-40 122 150)" opacity="0.85"/>
            <ellipse cx="178" cy="150" rx="15" ry="8" transform="rotate(40 178 150)" opacity="0.85"/>
          </g>
          <circle cx="150" cy="108" r="10" fill="#e3d9f4"/>
        </svg>
      </div>
      <div className="hero-text">
        <span className="eyebrow">A creative outfit, Lagos · Nigeria</span>
        <h1>Where creativity meets <em>purpose</em>, excellence, and impact.</h1>
      </div>
    </div>
    <p className="lede ">We are a creative outfit specialising in production management, event planning and execution, theatre and film productions, and creative project management — nurturing the next generation of creative leaders.</p>
    <div className="ctas ">
      <a className="btn btn-primary" href="#what-we-do">See what we do</a>
      <a className="btn btn-ghost" href="#contact">Get in touch</a>
    </div>
  </div>

  <div className="curtain-row" aria-hidden="true">
    <svg viewBox="0 0 200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 H200 V50 Q175,80 150,50 Q125,80 100,50 Q75,80 50,50 Q25,80 0,50 Z" fill="#faf6ef"/>
    </svg>
    <svg viewBox="0 0 200 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 H200 V50 Q175,80 150,50 Q125,80 100,50 Q75,80 50,50 Q25,80 0,50 Z" fill="#faf6ef"/>
    </svg>
  </div>

  
</section>
  );
}
