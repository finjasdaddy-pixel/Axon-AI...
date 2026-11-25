import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Eye, KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Trust & Security" };

const principles = [
  { icon: Eye, title: "Be transparent", text: "Explain what each feature does, what information it needs, and why. Do not promise data practices that have not been implemented." },
  { icon: KeyRound, title: "Use least privilege", text: "Integrations should request only the permissions they need. Keep bot tokens and API keys on the server, never in public client-side code." },
  { icon: LockKeyhole, title: "Protect access", text: "When accounts or dashboards are added, use established authentication, secure sessions, and server-side authorization checks." },
  { icon: ShieldCheck, title: "Make claims verifiable", text: "Publish accurate information about safeguards, retention, and incident handling. Only claim audits or certifications that have actually happened." },
];

export default function SecurityPage() {
  return <div className="inner-page section-wrap">
    <div className="breadcrumb"><Link href="/"><ArrowLeft size={14} /> HOME</Link><span>/</span><span>TRUST & SECURITY</span></div>
    <Reveal><div className="page-hero"><div className="eyebrow"><span className="pulse-dot" /> TRUST IS A PRACTICE</div><h1>Clarity is part<br />of <span className="gradient-text">the system.</span></h1><p>Security and privacy should be explained plainly and implemented deliberately. This page is a set of principles for the project—not a claim that a production security program already exists.</p></div></Reveal>
    <div className="security-banner"><div className="security-banner-icon"><ShieldCheck size={28} /></div><div><span className="section-kicker">PROJECT STATUS</span><h2>Website starter · No account system yet</h2><p>This starter does not collect account data or connect to an AI backend by itself. Review hosting, analytics, forms, and any future integrations before launch.</p></div></div>
    <div className="security-grid">{principles.map((p, i) => { const Icon = p.icon; return <Reveal key={p.title} delay={i * .05}><article className="security-card"><Icon size={22} /><h2>{p.title}</h2><p>{p.text}</p></article></Reveal>; })}</div>
    <section className="privacy-note"><span className="section-kicker">BEFORE PUBLIC LAUNCH</span><h2>Make the policy match the product.</h2><p>Prepare an appropriate privacy notice and legal notice for the real operator and jurisdiction. If you add analytics, contact forms, logins, or third-party services, document what those services process. This starter is not legal advice.</p><Link className="text-link" href="/ecosystem">Return to the ecosystem <ArrowUpRight size={15} /></Link></section>
  </div>;
}
