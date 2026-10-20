"use client";

import Link from "next/link";
import HeroSlider from "../components/HeroSlider";
import BeritaCard from "../components/BeritaCard";
import PrestasiCard from "../components/PrestasiCard";
import useSiteContent from "../lib/useSiteContent";

export default function HomePage() {
  const content = useSiteContent();
  const news = content.news || [];
  const achievements = content.achievements || [];
  const home = content.home || {};

  return (
    <>
      <HeroSlider />
      <div className="ticker"><div className="container ticker-inner"><span className="ticker-label">INFO SEKOLAH</span><span>{home.description || "Website profil dan informasi SMA Negeri 1 Pemalang"}</span><Link href="/berita">Lihat berita terbaru ↗</Link></div></div>
      <section className="section container intro-grid">
        <div className="intro-copy">
          <p className="eyebrow">SAMBUTAN & PROFIL</p>
          <h2 className="display-title">{home.title || "SMA Negeri 1 Pemalang"}</h2>
          <p className="lead">{home.description || "SMA Negeri 1 Pemalang terus berupaya meningkatkan kualitas pendidikan dan mengembangkan potensi peserta didik agar siap menghadapi perubahan zaman."}</p>
          <Link className="text-link text-link-large" href="/about">Mengenal sekolah kami <span>↗</span></Link>
        </div>
        <div className="intro-visual">
          <img src={home.heroImage || "/images/hero-smansa.jpg"} alt="Dokumentasi SMA Negeri 1 Pemalang" />
          <div className="photo-stamp"><span>SMANSA</span><strong>Pemalang</strong><small>Jawa Tengah · Indonesia</small></div>
          <span className="vertical-note">LEARN · GROW · CONTRIBUTE</span>
        </div>
      </section>
      <section className="section news-section">
        <div className="container">
          <div className="section-topline"><div><p className="eyebrow">KABAR DARI SEKOLAH</p><h2 className="display-title">Berita Sekolah</h2></div><Link className="text-link text-link-large" href="/berita">Semua berita <span>↗</span></Link></div>
          <div className="news-feature-grid">
            <div className="news-feature-main">{news.slice(0, 1).map(item => <BeritaCard key={item.id} item={normalizeNews(item)} featured />)}</div>
            <div className="news-feature-side">{news.slice(1, 4).map(item => <BeritaCard key={item.id} item={normalizeNews(item)} compact />)}</div>
          </div>
        </div>
      </section>
      <section className="section container achievement-section">
        <div className="section-topline"><div><p className="eyebrow">PRESTASI & APRESIASI</p><h2 className="display-title">Prestasi dan Apresiasi</h2></div><Link className="text-link text-link-large" href="/prestasi">Lihat prestasi <span>↗</span></Link></div>
        <div className="card-grid">{achievements.slice(0, 3).map(item => <PrestasiCard key={item.id} item={normalizeAchievement(item)} />)}</div>
      </section>
      <section className="full-bleed-photo">
        <img src={home.activityImage || "/images/kegiatan-smansa.jpg"} alt="Kegiatan siswa SMA Negeri 1 Pemalang" />
        <div className="full-bleed-overlay"><h2>Kegiatan SMA Negeri 1 Pemalang</h2><Link className="button button-light" href="/galeri">Jelajahi galeri ↗</Link></div>
      </section>
      <section className="section container values-section">
        <div><p className="eyebrow">ARAH PENDIDIKAN</p><h2 className="display-title">{home.valuesTitle || "Berkarakter kuat. Terbuka pada dunia."}</h2><p className="muted">{home.valuesDescription || "Visi sekolah menekankan kepribadian Pancasila, iman yang kuat, akhlak mulia, prestasi, kepedulian lingkungan, dan wawasan global."}</p><Link className="text-link text-link-large" href="/about">Baca visi dan misi <span>↗</span></Link></div>
        <div className="value-list"><article><span>01</span><div><h3>Karakter & integritas</h3><p>Menumbuhkan budi pekerti dan tanggung jawab dalam keseharian.</p></div></article><article><span>02</span><div><h3>Prestasi & potensi</h3><p>Mendorong kemampuan akademik dan nonakademik setiap siswa.</p></div></article><article><span>03</span><div><h3>Lingkungan & wawasan global</h3><p>Menjaga kepedulian lokal sambil siap menghadapi dunia yang terus berubah.</p></div></article></div>
      </section>
    </>
  );
}

function normalizeNews(item) {
  return {
    ...item,
    id: item.id || `berita-${(item.judul || item.title || "baru").toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    judul: item.judul || item.title || item.name || "Tanpa judul",
    kategori: item.kategori || item.category || "Informasi sekolah",
    tanggal: item.tanggal || item.date || "",
    ringkasan: item.ringkasan || item.description || "",
    gambar: item.gambar || item.image || "/images/hero-smansa.jpg",
    alt: item.alt || item.title || "Dokumentasi sekolah",
    isi: Array.isArray(item.isi) ? item.isi : [item.ringkasan || item.description || ""],
  };
}

function normalizeAchievement(item) {
  return {
    ...item,
    judul: item.judul || item.title || item.name || "Prestasi siswa",
    tahun: item.tahun || item.date || item.year || "",
    deskripsi: item.deskripsi || item.description || "",
    gambar: item.gambar || item.image || "/images/prestasi-siswa.jpg",
    alt: item.alt || item.title || "Dokumentasi prestasi siswa",
  };
}
