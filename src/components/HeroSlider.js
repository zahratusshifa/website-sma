"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { image: "/images/hero-smansa.jpg", kicker: "SMA NEGERI 1 PEMALANG · JAWA TENGAH", title: <>SMA Negeri 1<br/><em>Pemalang.</em></>, desc: "Informasi profil, kegiatan, dan prestasi SMA Negeri 1 Pemalang.", button: "Jelajahi Smansa", href: "/about", number: "01" },
  { image: "/images/kegiatan-smansa.jpg", kicker: "KREATIVITAS · KOLABORASI · KEBERSAMAAN", title: <>Kegiatan dan<br/><em>aktivitas siswa.</em></>, desc: "Dokumentasi kegiatan siswa SMA Negeri 1 Pemalang.", button: "Lihat kegiatan", href: "/galeri", number: "02" },
  { image: "/images/pesta-demokrasi.jpeg", kicker: "SEMANGAT BERPRESTASI", title: <>Prestasi Siswa<br/><em>SMANSA.</em></>, desc: "Informasi pencapaian akademik dan nonakademik siswa.", button: "Lihat prestasi", href: "/prestasi", number: "03" },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = setInterval(() => setActive(v => (v + 1) % slides.length), 3000); return () => clearInterval(timer); }, []);
  return (
    <section className="hero-slider" aria-label="Sorotan SMA Negeri 1 Pemalang">
      {slides.map((slide, i) => <div key={slide.number} className={`hero-slide ${active === i ? "is-active" : ""}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(8,24,48,.90) 0%, rgba(8,24,48,.63) 48%, rgba(8,24,48,.12) 100%), url("${slide.image}")` }}>
        <div className="container hero-content"><p className="eyebrow eyebrow-light">{slide.kicker}</p><h1>{slide.title}</h1><p className="hero-description">{slide.desc}</p><Link className="button button-gold" href={slide.href}>{slide.button}<span>↗</span></Link></div>
      </div>)}
      <div className="container hero-controls"><div className="hero-dots">{slides.map((s,i)=><button key={s.number} className={active===i?"hero-dot active":"hero-dot"} onClick={()=>setActive(i)} aria-label={`Tampilkan slide ${i+1}`} />)}</div><div className="hero-index"><strong>{slides[active].number}</strong><span> / 03</span></div><div className="hero-caption">SMA NEGERI 1 PEMALANG</div></div>
    </section>
  );
}
