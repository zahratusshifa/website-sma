
import { berita as defaultBerita } from "../data/berita";
import { prestasi as defaultPrestasi } from "../data/prestasi";

export const STORAGE_KEY = "smansa-site-content";

const defaultGallery = [
  { id: "gallery-1", title: "Penampilan Guest Star", category: "Agenda HUT SMANSA", image: "/images/panggung-gks.jpg" },
  { id: "gallery-2", title: "Keseruan GKS", category: "Agenda HUT SMANSA", image: "/images/gks-air.jpg" },
  { id: "gallery-3", title: "Jalan Sehat", category: "Agenda Gelar Kreativitas Siswa", image: "/images/jalan.jpg" },
  { id: "gallery-4", title: "Lomba Makan Kerupuk", category: "Agenda Classmeet", image: "/images/kerupuk.jpg" },
  { id: "gallery-5", title: "Pertandingan Free Fire", category: "Agenda Gelar Kreativitas Siswa", image: "/images/esport.jpg" },
  { id: "gallery-6", title: "Lomba Tarik Tambang", category: "Agenda Gelar Kreativitas Siswa", image: "/images/tambang.jpg" },
  { id: "gallery-7", title: "Pembuatan Video Angkatan", category: "Agenda Angkatan 60", image: "/images/koreo.jpg" },
  { id: "gallery-8", title: "Outbond Antarkelas", category: "Agenda Classmeet", image: "/images/kas.jpg" },
  { id: "gallery-9", title: "Penampilan Tari", category: "Agenda Gelar Kreativitas Siswa", image: "/images/gks-tari.jpg" },
  { id: "gallery-10", title: "Prestasi FLS3N 2026", category: "Prestasi seni", image: "/images/fls3n-guru-siswa.jpg" },
  { id: "gallery-11", title: "Peserta FLS3N Kabupaten Pemalang", category: "Prestasi siswa", image: "/images/fls3n-peserta.jpg" },
  { id: "gallery-12", title: "Pesta Demokrasi", category: "Organisasi siswa", image: "/images/pesta-demokrasi.jpg" },
  { id: "gallery-13", title: "Apresiasi siswa berprestasi", category: "Prestasi siswa", image: "/images/prestasi-siswa.jpg" },
  { id: "gallery-14", title: "Kunjungan dan motivasi siswa", category: "Agenda sekolah", image: "/images/kunjungan-zulkifli-hasan.jpg" },
];

const defaultExtracurriculars = [
  { id: "ekskul-1", title: "Paskibraka", description: "Kegiatan pembinaan kedisiplinan, kepemimpinan, dan baris-berbaris.", image: "/images/paskibra.jpg" },
  { id: "ekskul-2", title: "English Speaking Club", description: "Kegiatan untuk melatih kemampuan berbicara dan berkomunikasi dalam bahasa Inggris.", image: "/images/esc.jpg" },
  { id: "ekskul-3", title: "Futsal", description: "Kegiatan olahraga untuk melatih teknik, kebugaran, dan kerja sama tim.", image: "/images/futsal.jpg" },
  { id: "ekskul-4", title: "PMR", description: "Kegiatan kepalangmerahan yang mengembangkan kepedulian dan keterampilan pertolongan pertama.", image: "/images/pmr.jpg" },
  { id: "ekskul-5", title: "Seni Tari", description: "Kegiatan untuk mempelajari gerak tari dan mengembangkan kreativitas seni.", image: "/images/kegiatan-smansa.jpg" },
  { id: "ekskul-6", title: "Gamelan", description: "Kegiatan seni musik tradisional untuk mengenal dan melestarikan budaya.", image: "/images/gamelan.jpg" },
  { id: "ekskul-7", title: "Voli", description: "Kegiatan olahraga untuk mengembangkan keterampilan dan sportivitas.", image: "/images/voli.jpg" },
  { id: "ekskul-8", title: "Pramuka", description: "Kegiatan untuk membangun kemandirian, kedisiplinan, dan kerja sama.", image: "/images/pramuka.jpg" },
  { id: "ekskul-9", title: "TIK", description: "Kegiatan untuk mengembangkan keterampilan teknologi informasi dan komputer.", image: "/images/tik.jpg" },
];

export const defaultContent = {
  home: {
    title: "SMA Negeri 1 Pemalang",
    description: "Informasi profil, kegiatan, dan prestasi SMA Negeri 1 Pemalang.",
    heroImage: "/images/hero-smansa.jpg",
    activityImage: "/images/kegiatan-smansa.jpg",
    valuesTitle: "Berkarakter kuat. Terbuka pada dunia.",
    valuesDescription: "Mendorong prestasi, karakter, kepedulian lingkungan, dan wawasan global.",
  },

  profile: {
    title: "Profil SMA Negeri 1 Pemalang",
    description: "SMA Negeri 1 Pemalang merupakan satuan pendidikan menengah negeri di Kabupaten Pemalang, Jawa Tengah.",
    profileImage: "/images/hero-smansa.jpg",
    principalName: "Drs. Susila Widodo, S.Ap., M.Pd.",
    principalImage: "/images/kepala-sekolah.jpg",
    vision: "Mewujudkan Insan Indonesia yang berkepribadian Pancasila, Kuat Iman, Berakhlak Mulia, Berprestasi Prima, Berwawasan Lingkungan, dan Global.",
  },

  history: [
    { year: "1961", title: "Awal Pembentukan", description: "Panitia SMA Persiapan Pemalang dibentuk sebagai langkah awal pendirian sekolah." },
    { year: "1962", title: "Sekolah Resmi Dibuka", description: "SMA Persiapan Pemalang resmi dibuka pada 16 Agustus 1962." },
    { year: "1963", title: "Menjadi Sekolah Negeri", description: "Sekolah resmi menjadi sekolah negeri pada 25 Juli 1963." },
  ],

  news: defaultBerita.map((item) => ({
    ...item,
    title: item.judul,
    description: item.ringkasan,
    date: item.tanggal,
    category: item.kategori,
    image: item.gambar,
  })),

  achievements: defaultPrestasi.map((item) => ({
    ...item,
    title: item.judul,
    description: item.deskripsi,
    date: item.tahun,
    image: item.gambar,
  })),

  gallery: defaultGallery,
  extracurriculars: defaultExtracurriculars,
};

function hasValidItems(value) {
  return (
    Array.isArray(value) &&
    value.some(
      (item) =>
        item &&
        typeof item === "object" &&
        String(item.title || item.judul || item.name || "").trim()
    )
  );
}

function mergeWithDefaults(saved) {
  if (!saved || typeof saved !== "object") {
    return defaultContent;
  }

  return {
    ...defaultContent,
    ...saved,

    home: {
      ...defaultContent.home,
      ...(saved.home || {}),
    },

    profile: {
      ...defaultContent.profile,
      ...(saved.profile || {}),
    },

    history: hasValidItems(saved.history)
      ? saved.history
      : defaultContent.history,

    news: hasValidItems(saved.news)
      ? saved.news
      : defaultContent.news,

    achievements: hasValidItems(saved.achievements)
      ? saved.achievements
      : defaultContent.achievements,

    gallery: hasValidItems(saved.gallery)
      ? saved.gallery
      : defaultContent.gallery,

    extracurriculars: hasValidItems(saved.extracurriculars)
      ? saved.extracurriculars
      : defaultContent.extracurriculars,
  };
}

export function readContent() {
  if (typeof window === "undefined") {
    return defaultContent;
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return defaultContent;
    }

    return mergeWithDefaults(JSON.parse(saved));
  } catch {
    return defaultContent;
  }
}

export function saveContent(content) {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(mergeWithDefaults(content))
    );

    window.dispatchEvent(new Event("smansa-content-updated"));
    return true;
  } catch (error) {
    console.error("Gagal menyimpan konten:", error);
    return false;
  }
}
