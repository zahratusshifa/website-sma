import SectionHeading from "../../components/SectionHeading";
export default function KontakPage() {
 return <>
  <section className="page-hero page-hero-editorial"><div className="container"><p className="eyebrow eyebrow-light">TERHUBUNG DENGAN KAMI</p><h1>Informasi dan<br/><em>kontak sekolah.</em></h1><p>Gunakan kanal resmi berikut untuk mencari informasi lebih lanjut.</p></div></section>
  <section className="section container"><SectionHeading eyebrow="HUBUNGI SMANSA" title="Kami siap terhubung" description="Informasi kontak mengacu pada website sekolah dan data pendidikan pemerintah."/>
   <div className="contact-grid"><article className="contact-card"><span className="contact-icon">⌖</span><p className="eyebrow">ALAMAT</p><h2>Jl. Jenderal Gatot Subroto</h2><p className="muted">Bojongbata, Kecamatan Pemalang, Kabupaten Pemalang, Jawa Tengah.</p></article><article className="contact-card"><span className="contact-icon">☎</span><p className="eyebrow">TELEPON</p><h2>0284 321437</h2><p className="muted">Silakan hubungi pada jam layanan sekolah.</p><a className="text-link" href="tel:0284321437">Hubungi telepon ↗</a></article><article className="contact-card"><span className="contact-icon">✉</span><p className="eyebrow">EMAIL</p><h2>Email sekolah</h2><p className="muted">sman1pml.jateng@gmail.com</p><a className="text-link" href="mailto:sman1pml.jateng@gmail.com">Kirim email ↗</a></article></div>
   <div className="official-link-panel"><div><p className="eyebrow">KANAL RESMI</p><h2>Informasi terbaru dari sekolah</h2><p className="muted">Buka website resmi untuk berita, pengumuman, dan pembaruan sekolah.</p></div><a className="button button-gold" href="https://www.sman1-pemalang.sch.id/" target="_blank" rel="noreferrer">Website resmi ↗</a></div>
  </section>
 </>
}
