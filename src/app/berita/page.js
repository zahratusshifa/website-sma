"use client";

import SectionHeading from "../../components/SectionHeading";
import BeritaCard from "../../components/BeritaCard";
import useSiteContent from "../../lib/useSiteContent";

export default function BeritaPage() {
  const content = useSiteContent();
  const berita = (content.news || []).map((item, index) => ({
    ...item,
    id: item.id || `berita-${index}`,
    judul: item.judul || item.title || item.name || "Tanpa judul",
    kategori: item.kategori || item.category || "Informasi sekolah",
    tanggal: item.tanggal || item.date || "",
    ringkasan: item.ringkasan || item.description || "",
    gambar: item.gambar || item.image || "/images/hero-smansa.jpg",
    alt: item.alt || item.title || "Dokumentasi sekolah",
  }));

  return (
    <>
      <section className="page-hero page-hero-editorial">
        <div className="container"><p className="eyebrow eyebrow-light">INFORMASI SEKOLAH</p><h1>Berita SMA Negeri 1 Pemalang</h1><p>Informasi kegiatan dan prestasi SMA Negeri 1 Pemalang.</p></div>
      </section>
      <section className="section container">
        <SectionHeading eyebrow="BERITA SEKOLAH" title="Berita Sekolah" description="Informasi kegiatan dan prestasi SMA Negeri 1 Pemalang." />
        {berita.length ? <div className="card-grid">{berita.map(item => <BeritaCard key={item.id} item={item} />)}</div> : <p className="muted">Belum ada berita yang ditambahkan.</p>}
      </section>
    </>
  );
}
