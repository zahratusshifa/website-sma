
"use client";

import SectionHeading from "../../components/SectionHeading";
import PrestasiCard from "../../components/PrestasiCard";
import useSiteContent from "../../lib/useSiteContent";

export default function PrestasiPage() {
  const content = useSiteContent();

  const prestasi = (content.achievements || []).map((item, index) => ({
    ...item,
    id: item.id || `prestasi-${index}`,
    tahun: item.tahun || item.date || item.year || "",
    judul: item.judul || item.title || item.name || "Prestasi siswa",
    deskripsi: item.deskripsi || item.description || "",
    gambar: item.gambar || item.image || "/images/prestasi-siswa.jpg",
    alt: item.alt || item.title || "Dokumentasi prestasi siswa",
  }));

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow eyebrow-light">BANGGA BERPRESTASI</p>
          <h1>Prestasi Sekolah</h1>
          <p>Apresiasi untuk usaha, semangat, dan pencapaian siswa.</p>
        </div>
      </section>

      <section className="section container">
        <SectionHeading
          eyebrow="PENCAPAIAN"
          title="Langkah kecil, hasil membanggakan"
          description="Daftar prestasi dapat diperbarui sesuai dokumentasi dan hasil resmi sekolah."
        />

        {prestasi.length > 0 ? (
          <div className="card-grid">
            {prestasi.map((item) => (
              <PrestasiCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="muted">Belum ada prestasi yang ditambahkan.</p>
        )}
      </section>
    </>
  );
}
