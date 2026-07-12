/** The curtain-into-vine motif, shrunk to an inline icon for the compact hero row. */
export default function VineIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 300" className={className} aria-hidden="true">
      <circle cx="150" cy="150" r="140" fill="none" stroke="#b9a3de" strokeOpacity="0.35" strokeWidth="1.5" />
      <path
        d="M150 250 C150 210, 130 200, 130 170 C130 145, 150 140, 150 115"
        stroke="#c3d3b6"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M150 250 C150 210, 170 200, 170 170 C170 145, 150 140, 150 115"
        stroke="#7f9c73"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <g fill="#c3d3b6">
        <ellipse cx="128" cy="188" rx="17" ry="9" transform="rotate(-30 128 188)" />
        <ellipse cx="172" cy="188" rx="17" ry="9" transform="rotate(30 172 188)" />
        <ellipse cx="122" cy="150" rx="15" ry="8" transform="rotate(-40 122 150)" opacity="0.85" />
        <ellipse cx="178" cy="150" rx="15" ry="8" transform="rotate(40 178 150)" opacity="0.85" />
      </g>
      <circle cx="150" cy="108" r="10" fill="#e3d9f4" />
    </svg>
  );
}
