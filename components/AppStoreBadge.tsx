// AppStoreBadge — Apple Marketing Guidelines compliant
// Badge "Download on the App Store" SVG inline
// Rules: no color modification, no proportion change, min width 120px,
//        href placeholder until App Store URL is live.

interface AppStoreBadgeProps {
  href: string;
  width?: number;
  className?: string;
}

export default function AppStoreBadge({
  href,
  width = 135,
  className = "",
}: AppStoreBadgeProps) {
  const height = Math.round((width / 135) * 40);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Télécharger sur l'App Store"
      className={`inline-block transition-opacity hover:opacity-80 focus-visible:opacity-80 ${className}`}
    >
      {/* Official "Download on the App Store" badge — black version */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 135 40"
        width={width}
        height={height}
        role="img"
        aria-label="Download on the App Store"
        style={{ display: "block" }}
      >
        {/* Background */}
        <rect width="135" height="40" rx="7" ry="7" fill="#000" />
        {/* Border */}
        <rect
          x="0.5"
          y="0.5"
          width="134"
          height="39"
          rx="6.5"
          ry="6.5"
          fill="none"
          stroke="#A6A6A6"
          strokeWidth="0.75"
        />
        {/* Apple glyph */}
        <path
          d="M18.4 9.8c-.7.9-1.8 1.5-3 1.4-.1-1.2.4-2.4 1.1-3.2.7-.9 1.9-1.6 3-1.5.1 1.2-.4 2.4-1.1 3.3zm1.1 1.7c-1.7-.1-3.1 1-3.9 1s-2.1-.9-3.5-.9c-1.8 0-3.4 1-4.4 2.7-1.9 3.3-.5 8.2 1.4 10.8.9 1.3 2 2.8 3.4 2.8 1.3-.1 1.8-.9 3.4-.9s2 .9 3.4.9 2.3-1.3 3.3-2.6c.6-.9.9-1.4 1.3-2.4-3.5-1.4-4-6.7-.4-8.7-.8-1.5-2.1-2.7-4-2.7z"
          fill="white"
        />
        {/* "Download on the" */}
        <text
          x="36"
          y="14.5"
          fontFamily="-apple-system, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif"
          fontSize="8"
          fill="white"
          letterSpacing="0.1"
        >
          Download on the
        </text>
        {/* "App Store" */}
        <text
          x="35.5"
          y="29"
          fontFamily="-apple-system, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif"
          fontSize="17"
          fontWeight="600"
          fill="white"
          letterSpacing="-0.4"
        >
          App Store
        </text>
      </svg>
    </a>
  );
}
