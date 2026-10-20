"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/berita", label: "Berita" },
  { href: "/prestasi", label: "Prestasi" },
  { href: "/galeri", label: "Galeri" },
  { href: "/ekstrakurikuler", label: "Ekstrakurikuler" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="utility-bar"><div className="container utility-inner"><span>PORTAL INFORMASI SEKOLAH</span><span>Pemalang, Jawa Tengah</span></div></div>
      <div className="container nav-wrap">
        <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="SMA Negeri 1 Pemalang beranda">
          <span className="brand-mark"><img src="/images/logo-smansa.png" alt="Logo SMAN 1 Pemalang" onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextElementSibling.style.display = "grid"; }} /><span className="brand-fallback">S</span></span>
          <span className="brand-text"><strong>SMA NEGERI 1 PEMALANG</strong><small>JUJUR · UNGGUL · ADAPTIF · RELIGIUS · ASRI</small></span>
        </Link>
        <button className="menu-toggle" type="button" aria-label="Buka menu" aria-expanded={open} onClick={() => setOpen(!open)}><span></span><span></span><span></span></button>
        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return <Link key={link.href} className={active ? "nav-link active" : "nav-link"} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>;
          })}
        </nav>
      </div>
    </header>
  );
}
