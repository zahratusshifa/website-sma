"use client";

import SectionHeading from "../../components/SectionHeading";
import useSiteContent from "../../lib/useSiteContent";

export default function GaleriPage() {
  const content = useSiteContent();
  const foto = (content.gallery || []).map((item, index) => ({
    ...item,
    id: item.id || `foto-${index}`,
    src: item.src || item.image || item.gambar || "/images/kegiatan-smansa.jpg",
    title: item.title || item.judul || item.name || "Dokumentasi sekolah",
    category: item.category || item.kategori || "Kegiatan sekolah",
  }));

  return (
    <>
      <section className="page-hero"><div className="container"><p className="eyebrow eyebrow-light">MOMEN SMANSA</p><h1>Galeri Sekolah</h1><p>Dokumentasi kegiatan, kebersamaan, dan cerita di sekolah.</p></div></section>
      <section className="section container"><SectionHeading eyebrow="ALBUM FOTO" title="Potret kegiatan sekolah" description="Dokumentasi kegiatan dan prestasi SMA Negeri 1 Pemalang." />
        <div className="gallery-grid">{foto.map(item => <article className="gallery-item" key={item.id}><img src={item.src} alt={item.title} /><div className="gallery-caption"><span>{item.category}</span><h3>{item.title}</h3></div></article>)}</div>
      </section>
    </>
  );
}
