"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import useSiteContent from "../../../lib/useSiteContent";

export default function BeritaDetailPage() {
  const params = useParams();
  const content = useSiteContent();
  const item = (content.news || []).find((article) => String(article.id) === String(params.id));

  if (!item) {
    return <section className="section container article-container"><Link className="back-link" href="/berita">← Kembali ke berita</Link><h1 className="article-title">Berita tidak ditemukan</h1><p className="muted">Konten mungkin telah dihapus atau belum tersimpan di browser ini.</p></section>;
  }

  const title = item.judul || item.title || item.name || "Tanpa judul";
  const category = item.kategori || item.category || "Informasi sekolah";
  const date = item.tanggal || item.date || "";
  const description = item.ringkasan || item.description || "";
  const image = item.gambar || item.image || "/images/hero-smansa.jpg";
  const paragraphs = Array.isArray(item.isi) ? item.isi : [description];

  return (
    <section className="section container article-container">
      <Link className="back-link" href="/berita">← Kembali ke berita</Link>
      <p className="eyebrow">{category} · {date}</p>
      <h1 className="article-title">{title}</h1>
      <p className="article-lead">{description}</p>
      <img className="article-image" src={image} alt={item.alt || title} />
      <div className="article-body">{paragraphs.filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
    </section>
  );
}
