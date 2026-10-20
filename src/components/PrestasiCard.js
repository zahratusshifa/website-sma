import Link from "next/link";
export default function PrestasiCard({ item }) {
  return <article className="achievement-card"><Link className="achievement-image-wrap" href="/prestasi"><img src={item.gambar} alt={item.alt}/><span className="achievement-arrow">↗</span></Link><div className="achievement-content"><span className="achievement-year">{item.tahun}</span><h3>{item.judul}</h3><p className="muted">{item.deskripsi}</p></div></article>;
}
