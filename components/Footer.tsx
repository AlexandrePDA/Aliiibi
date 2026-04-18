import AppStoreBadge from "./AppStoreBadge";
import { FOOTER } from "@/lib/content";

export default function Footer() {
  return (
    <footer
      className="px-5 py-12 sm:py-16"
      style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
    >
      <div className="mx-auto max-w-4xl flex flex-col items-center gap-6 text-center">
        {/* App Store badge — small format */}
        <AppStoreBadge href={FOOTER.appStoreUrl} width={130} />

        {/* Links */}
        <nav aria-label="Liens du pied de page">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
            {FOOTER.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm transition-colors hover:text-white focus-visible:text-white"
                  style={{ color: "#8E8E93" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Signature sarcastique */}
        <p className="text-xs italic" style={{ color: "#8E8E93" }}>
          {FOOTER.signature}
        </p>
      </div>
    </footer>
  );
}
