interface CurtainValanceProps {
  /** Flip vertically — used to close the curtain at the footer. */
  flip?: boolean;
  className?: string;
  /** Fill color of the scalloped curtain — defaults to the cream canvas. */
  fill?: string;
}

const SCALLOP_PATH =
  'M0,0 H200 V50 Q175,80 150,50 Q125,80 100,50 Q75,80 50,50 Q25,80 0,50 Z';

/**
 * The signature "stage curtain" scallop edge. Two mirrored panels sit
 * side-by-side so it reads as a curtain parting (hero) or closing (footer).
 */
export default function CurtainValance({ flip = false, className = '', fill = '#faf6ef' }: CurtainValanceProps) {
  return (
    <div className={`flex h-12 w-full md:h-[70px] ${className}`} aria-hidden="true">
      {[0, 1].map((i) => (
        <svg
          key={i}
          viewBox="0 0 200 80"
          preserveAspectRatio="none"
          className={`block h-full w-1/2 ${flip ? '-scale-y-100' : ''}`}
        >
          <path d={SCALLOP_PATH} fill={fill} />
        </svg>
      ))}
    </div>
  );
}
