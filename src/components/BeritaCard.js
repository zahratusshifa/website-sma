import Link from "next/link";
export default function BeritaCard({ item, featured = false, compact = false }) {
  if (compact) return (
    <article className="news-row">
      <Link className="news-row-image" href={`/berita/${item.id}`}><img src={item.gambar} alt={item.alt}/></Link>
      <div className="news-row-content"><p className="eyebrow">{item.kategori} <span>·</span> {item.tanggal}</p><h3><Link href={`/berita/${item.id}`}>{item.judul}</Link></h3><Link className="text-link" href={`/berita/${item.id}`}>Baca cerita ↗</Link></div>
    </article>
  );
  return (
    <article className={featured ? "news-card news-card-featured" : "news-card"}>
      <Link className="news-image-link" href={`/berita/${item.id}`}><img className="news-image" src={item.gambar} alt={item.alt}/></Link>
      <div className="news-card-content"><p className="eyebrow">{item.kategori} <span>·</span> {item.tanggal}</p><h3><Link href={`/berita/${item.id}`}>{item.judul}</Link></h3><p className="muted">{item.ringkasan}</p><Link className="text-link" href={`/berita/${item.id}`}>Baca selengkapnya ↗</Link></div>
    </article>
  );
}
