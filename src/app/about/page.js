
import Link from "next/link";

const libraryServices = [
  {
    number: "01",
    title: "Layanan Sirkulasi",
    description:
      "Melayani peminjaman dan pengembalian bahan pustaka serta membantu penelusuran koleksi melalui OPAC.",
  },
  {
    number: "02",
    title: "Layanan Referensi",
    description:
      "Membantu pencarian informasi melalui katalog dan sumber rujukan, seperti kamus, ensiklopedia, dan buku referensi.",
  },
  {
    number: "03",
    title: "Layanan Baca di Tempat",
    description:
      "Menyediakan tempat bagi siswa untuk membaca, belajar mandiri, dan memanfaatkan koleksi perpustakaan.",
  },
  {
    number: "04",
    title: "Layanan Koleksi Digital",
    description:
      "Mendukung kegiatan belajar melalui akses koleksi elektronik dan sumber informasi digital.",
  },
  {
    number: "05",
    title: "Layanan Literasi dan Promosi",
    description:
      "Mendorong budaya membaca melalui kegiatan literasi, promosi perpustakaan, dan aktivitas peningkatan minat baca.",
  },
  {
    number: "06",
    title: "Layanan Bimbingan Pemustaka",
    description:
      "Membimbing siswa dalam menggunakan fasilitas perpustakaan, menemukan koleksi, dan memanfaatkan teknologi informasi.",
  },
  {
    number: "07",
    title: "Layanan Ekstensi",
    description:
      "Memperluas akses membaca melalui fasilitas seperti Gazebo Baca, Lobi Baca, dan Teras Baca.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO PROFIL */}
      <section className="page-hero page-hero-editorial">
        <div className="container">
          <p className="eyebrow eyebrow-light">
            PROFIL SEKOLAH · 01
          </p>

          <h1>
            Mengenal lebih dekat
            <br />
            <em>SMA Negeri 1 Pemalang.</em>
          </h1>

          <p>
            Sekolah yang terus bertumbuh dalam karakter,
            prestasi, kepedulian, dan wawasan global.
          </p>
        </div>
      </section>

      {/* PROFIL SEKOLAH */}
      <section className="section container about-layout">
        <div>
          <p className="eyebrow">TENTANG SMANSA</p>

          <h2 className="display-title">
            Profil SMA Negeri 1 Pemalang
          </h2>

          <p className="lead">
            SMA Negeri 1 Pemalang merupakan satuan pendidikan
            menengah negeri yang berlokasi di Kabupaten
            Pemalang, Jawa Tengah.
          </p>

          <p className="muted">
            Sekolah berkomitmen meningkatkan kualitas pendidikan
            dan mendukung pengembangan potensi peserta didik
            melalui pembelajaran serta kegiatan sekolah.
            Website ini menjadi jendela informasi mengenai
            profil, aktivitas, berita, dan pencapaian sekolah.
          </p>

          <Link
            className="text-link text-link-large"
            href="/berita"
          >
            Baca kabar sekolah ↗
          </Link>
        </div>

        <div className="about-photo-frame">
          <img
            className="about-photo"
            src="/images/prestasi-siswa.jpg"
            alt="Dokumentasi SMA Negeri 1 Pemalang"
          />
          <span>SMANSA · PEMALANG</span>
        </div>
      </section>

      {/* SEJARAH SEKOLAH */}
      <section className="section container">
        <div className="section-topline">
          <div>
            <p className="eyebrow">SEJARAH SEKOLAH</p>

            <h2 className="display-title">
              Perjalanan SMANSA Pemalang
            </h2>

            <p className="lead">
              Perjalanan panjang yang menjadi bagian dari
              perkembangan pendidikan di Kabupaten Pemalang.
            </p>
          </div>
        </div>

        <div className="history-timeline">
          <article className="history-card">
            <span className="history-year">1961</span>

            <div>
              <h3>Awal Pembentukan</h3>

              <p>
                Panitia SMA Persiapan Pemalang dibentuk dengan
                melibatkan unsur Pemerintah Kabupaten, guru
                SGA Negeri, dan guru SMP Negeri 1 Pemalang.
                Pembentukan panitia ini menjadi langkah awal
                pendirian sekolah menengah atas di Pemalang.
              </p>
            </div>
          </article>

          <article className="history-card">
            <span className="history-year">1962</span>

            <div>
              <h3>Sekolah Resmi Dibuka</h3>

              <p>
                Pada 16 Agustus 1962, SMA Persiapan Pemalang
                resmi dibuka dengan tiga kelas awal di gedung
                SGA Negeri Pemalang. Pada masa awal tersebut,
                sekolah dipimpin oleh Bapak R. Mardikun.
              </p>
            </div>
          </article>

          <article className="history-card">
            <span className="history-year">1963</span>

            <div>
              <h3>Menjadi Sekolah Negeri</h3>

              <p>
                Status sekolah resmi berubah menjadi sekolah
                negeri melalui surat keputusan penegerian
                Departemen Pendidikan dan Kebudayaan tertanggal
                25 Juli 1963. Setelah panitia berhasil membeli
                tanah di daerah Sirandu, Desa Bojongbata,
                kegiatan pembelajaran dipindahkan ke lokasi
                sekolah di Jalan Jenderal Gatot Subroto,
                Pemalang.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* SAMBUTAN KEPALA SEKOLAH */}
      <section className="section container principal-section">
        <div className="principal-photo-wrap">
          <img
            src="/images/kepala-sekolah.jpg"
            alt="Kepala SMA Negeri 1 Pemalang, Drs. Susila Widodo, S.Ap., M.Pd."
          />
        </div>

        <div className="principal-message">
          <p className="eyebrow">
            SAMBUTAN KEPALA SEKOLAH
          </p>

          <h2 className="display-title">
            Drs. Susila Widodo, S.Ap., M.Pd.
          </h2>

          <p className="lead">
            Kepala SMA Negeri 1 Pemalang
          </p>

          <p className="muted">
            Assalamu’alaikum warahmatullahi wabarakatuh.
          </p>

          <p className="muted">
            SMA Negeri 1 Pemalang terus berupaya meningkatkan
            kualitas pendidikan dan mendukung pengembangan
            potensi peserta didik. Website sekolah menjadi
            salah satu sarana untuk menyampaikan informasi
            mengenai profil, kegiatan, dan pencapaian sekolah
            kepada warga sekolah maupun masyarakat.
          </p>

          <p className="muted">
            Semoga kehadiran website ini dapat memberikan
            manfaat dan mendukung kemajuan sekolah secara
            berkelanjutan.
          </p>

          <p className="muted">
            Wassalamu’alaikum warahmatullahi wabarakatuh.
          </p>
        </div>
      </section>

      {/* VISI SEKOLAH - LAYOUT ASLI */}
      <section className="section vision-section">
        <div className="container vision-grid">
          <div>
            <p className="eyebrow eyebrow-light">
              VISI SEKOLAH
            </p>

            <h2>
              Berkarakter.
              <br />
              Berprestasi prima.
              <br />
              <em>Berwawasan global.</em>
            </h2>
          </div>

          <div>
            <p className="vision-quote">
              “Mewujudkan Insan Indonesia yang berkepribadian
              Pancasila, Kuat Iman, Berakhlak Mulia, Berprestasi
              Prima, Berwawasan Lingkungan, dan Global.”
            </p>

            <p className="vision-source">
              Rumusan visi sekolah · sumber website resmi
            </p>
          </div>
        </div>
      </section>

      {/* MISI SEKOLAH - LAYOUT ASLI */}
      <section className="section container">
        <div className="section-topline">
          <div>
            <p className="eyebrow">MISI SEKOLAH</p>

            <h2 className="display-title">
              Misi Sekolah
            </h2>
          </div>
        </div>

        <div className="mission-grid">
          <article>
            <span>01</span>

            <h3>Karakter dan kebangsaan</h3>

            <p>
              Menjaga keutuhan NKRI serta menumbuhkan
              pengamalan agama dan budi pekerti luhur.
            </p>
          </article>

          <article>
            <span>02</span>

            <h3>Potensi dan prestasi</h3>

            <p>
              Memberdayakan potensi siswa dalam ilmu
              pengetahuan, teknologi, seni, olahraga,
              iman, dan takwa.
            </p>
          </article>

          <article>
            <span>03</span>

            <h3>Siap menghadapi masa depan</h3>

            <p>
              Meningkatkan prestasi dan membangun kemampuan
              siswa untuk bersaing secara global.
            </p>
          </article>
        </div>
      </section>

      {/* PERPUSTAKAAN FLAMBOYAN */}
      <section className="section container">
        <div className="section-topline">
          <div>
            <p className="eyebrow">FASILITAS SEKOLAH</p>

            <h2 className="display-title">
              Perpustakaan Flamboyan
            </h2>

            <p className="lead">
              Fasilitas literasi dan sumber belajar bagi warga
              SMA Negeri 1 Pemalang.
            </p>
          </div>
        </div>

        <div className="library-feature">
          <div className="library-feature-photo">
            <img
              src="https://perpustakaanflamboyansmansapml.com/wp-content/uploads/2025/10/s1.jpg"
              alt="Perpustakaan Flamboyan SMA Negeri 1 Pemalang"
            />
          </div>

          <div className="library-feature-info">
            <span className="library-label">
              FASILITAS LITERASI
            </span>

            <h3>Ruang belajar dan sumber informasi</h3>

            <p>
              Perpustakaan Flamboyan menyediakan layanan
              peminjaman buku, penelusuran informasi, bahan
              bacaan, serta kegiatan literasi untuk mendukung
              proses pembelajaran siswa.
            </p>

            <a
              className="text-link"
              href="https://perpustakaanflamboyansmansapml.com/"
              target="_blank"
              rel="noreferrer"
            >
              Kunjungi situs perpustakaan ↗
            </a>
          </div>
        </div>

        <div className="library-service-grid">
          {libraryServices.map((service) => (
            <article
              className="library-service-card"
              key={service.number}
            >
              <span>{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
