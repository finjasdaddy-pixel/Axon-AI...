import Link from "next/link";
import { Orbit, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <div className="footer-brand">
          <Link href="/" className="brand"><span className="brand-mark"><Orbit size={21} /></span><span className="brand-word">axon<span>ai</span><small>INDEPENDENT PROJECT</small></span></Link>
          <p>Ideas into systems.<br />One iteration at a time.</p>
        </div>
        <div className="footer-links">
          <div><span className="footer-label">EXPLORE</span><Link href="/ecosystem">Ecosystem</Link><Link href="/evolution">Evolution</Link></div>
          <div><span className="footer-label">INFORMATION</span><Link href="/security">Trust & Security</Link><a href="mailto:hello@axonai.example">Contact placeholder <ArrowUpRight size={12} /></a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Axon AI · Project starter</span><span>BUILT TO EVOLVE <i>✳</i></span></div>
      </div>
    </footer>
  );
}
