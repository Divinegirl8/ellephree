import Reveal from './Reveal';
import logo from '../assets/logo-removebg-preview.png';
import TaglineStrip from './TaglineStrip';

export default function Story() {
  return (
    <>
          <TaglineStrip />
    <section id="story" className="py-24 h-screen mt-10 px-10">
    
      <div className="mx-auto max-w-page px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
    
          <Reveal>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-sage">
              Act I — Our Story
            </span>
            <h2 className="mt-3.5 font-display text-[1.8rem] text-forest sm:text-3xl md:text-4xl">
              Founded on a passion for excellence and innovation.
            </h2>
            <p className="mt-5 text-ink/80">
              <strong className="font-semibold text-ink">Ellephree Creation</strong> is a
              creative outfit specialising in production management, event planning and
              execution, theatre and film productions, lifestyle experiences, and creative
              project management. Ellephree exists to transform ideas into memorable
              experiences while contributing meaningfully to Nigeria's creative industry.
            </p>
            <p className="mt-4 text-ink/80">
              Over the years, we have worked across stage and screen — managing productions,
              coordinating creative projects, and delivering events that inspire, educate, and
              entertain diverse audiences. Our work is driven by the belief that creativity is
              a powerful tool for storytelling, cultural preservation, education, and social
              transformation.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto max-w-85 rounded-t-[170px] rounded-b-[18px] bg-linear-to-br from-lavender to-sage p-4.5">
              <img
                src={logo}
                alt="Ellephree Creations mark"
                className="aspect-[0.85/1]  w-full rounded-t-[150px] rounded-b-md bg-cream object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
    </>
  );
}
