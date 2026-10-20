"use client";

import SectionHeading from "../../components/SectionHeading";
import useSiteContent from "../../lib/useSiteContent";

export default function EkstrakurikulerPage() {
  const content = useSiteContent();
  const ekskul = (content.extracurriculars || []).map((item, index) => ({
    ...item,
    id: item.id || `ekskul-${index}`,
    title: item.title || item.name || item.judul || "Ekstrakurikuler",
    description: item.description || item.desc || item.deskripsi || "",
    image: item.image || item.gambar || item.imageUrl || "/images/kegiatan-smansa.jpg",
  }));

  return (
    <>
      <section className="page-hero"><div className="container"><p className="eyebrow eyebrow-light">KEGIATAN SISWA</p><h1>Ekstrakurikuler</h1><p>Daftar kegiatan ekstrakurikuler SMA Negeri 1 Pemalang.</p></div></section>
      <section className="section container"><SectionHeading eyebrow="DAFTAR EKSTRAKURIKULER" title="Kegiatan Ekstrakurikuler" description="Pilihan kegiatan untuk mengembangkan minat dan keterampilan siswa." />
        <div className="card-grid">{ekskul.map(item => <article className="feature-card ekskul-card" key={item.id}><img className="ekskul-image" src={item.image} alt={item.title} /><h2>{item.title}</h2><p className="muted">{item.description}</p></article>)}</div>
      </section>
    </>
  );
}
