import Link from "next/link";
import { Orbit, ArrowUpRight, Menu } from "lucide-react";

const links = [
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/evolution", label: "Evolution" },
  { href: "/security", label: "Trust & Security" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar section-wrap" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Axon AI home">
          <span className="brand-mark"><Orbit size={22} strokeWidth={1.7} /></span>
          <span className="brand-word">axon<span>ai</span><small>INDEPENDENT PROJECT</small></span>
        </Link>
        <div className="nav-links">
          {links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </div>
        <Link className="nav-cta" href="/ecosystem">Explore <ArrowUpRight size={15} /></Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu size={22} /></summary>
          <div className="mobile-menu-panel">{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div>
        </details>
      </nav>
    </header>
  );
}
