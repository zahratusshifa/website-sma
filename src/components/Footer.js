
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* IDENTITAS SEKOLAH */}
        <div>
          <Link className="brand brand-footer" href="/">
            <span className="brand-mark">
              <img src="/images/logo-smansa.png" alt="Logo SMANSA" />
              <span className="brand-fallback">S</span>
            </span>

            <span className="brand-text">
              <strong>SMA NEGERI 1 PEMALANG</strong>
              <small>
                JUJUR · UNGGUL · ADAPTIF · RELIGIUS · ASRI
              </small>
            </span>
          </Link>

          <p className="footer-description">
            Portal informasi dan profil SMA Negeri 1 Pemalang.
          </p>

          <div className="footer-address">
            <h3>ALAMAT SEKOLAH</h3>
            <p>
              Jl. Jenderal Gatot Subroto,
              <br />
              Bojongbata, Kabupaten Pemalang,
              <br />
              Jawa Tengah.
            </p>
          </div>
        </div>

        {/* MENU JELAJAHI */}
        <div>
          <h3>JELAJAHI</h3>

          <div className="footer-links">
            <Link href="/about">Profil sekolah</Link>
            <Link href="/berita">Berita</Link>
            <Link href="/prestasi">Prestasi</Link>
            <Link href="/galeri">Galeri</Link>
          </div>
        </div>

        {/* MENU INFORMASI */}
        <div>
          <h3>INFORMASI</h3>

          <div className="footer-links">
            <Link href="/ekstrakurikuler">
              Ekstrakurikuler
            </Link>

            <Link href="/kontak">Kontak</Link>

            <a
              href="https://www.sman1-pemalang.sch.id/"
              target="_blank"
              rel="noreferrer"
            >
              Website resmi ↗
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} SMA Negeri 1 Pemalang.
          All rights reserved.
        </span>

        <span>Profil dan Informasi Sekolah</span>
      </div>
    </footer>
  );
}
