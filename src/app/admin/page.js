
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminGuard from "@/components/AdminGuard";
import {
  defaultContent,
  readContent,
  saveContent,
} from "@/lib/site-storage";

const menus = [
  { key: "home", label: "Beranda", icon: "⌂" },
  { key: "profile", label: "Profil Sekolah", icon: "▤" },
  { key: "history", label: "Sejarah", icon: "◷" },
  { key: "news", label: "Berita", icon: "▣" },
  { key: "achievements", label: "Prestasi", icon: "☆" },
  { key: "gallery", label: "Galeri", icon: "▧" },
  { key: "extracurriculars", label: "Ekstrakurikuler", icon: "♧" },
];

const listKeys = [
  "history",
  "news",
  "achievements",
  "gallery",
  "extracurriculars",
];

const emptyItem = {
  title: "",
  description: "",
  date: "",
  category: "",
  image: "",
};

function DashboardContent() {
  const [content, setContent] = useState(defaultContent);
  const [active, setActive] = useState("home");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState(emptyItem);
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    setContent(readContent());
  }, []);

  const isList = listKeys.includes(active);
  const currentMenu = menus.find((item) => item.key === active);
  const currentList = Array.isArray(content[active])
    ? content[active]
    : [];

  function changeMenu(key) {
    setActive(key);
    setMessage("");
    setForm(emptyItem);
    setEditingIndex(-1);
  }

  function updateObject(field, value) {
    setContent((old) => ({
      ...old,
      [active]: {
        ...old[active],
        [field]: value,
      },
    }));
    setMessage("");
  }

  function updateForm(field, value) {
    setForm((old) => ({ ...old, [field]: value }));
    setMessage("");
  }

  function uploadImage(file, target) {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage("Pilih file gambar yang valid.");
      return;
    }

    if (file.size > 700 * 1024) {
      setMessage("Ukuran gambar maksimal 700 KB agar penyimpanan browser tidak cepat penuh.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (target === "form") {
        updateForm("image", reader.result);
      } else {
        updateObject(target, reader.result);
      }
    };

    reader.readAsDataURL(file);
  }

  function editItem(index) {
    const item = currentList[index];

    setForm({
      ...emptyItem,
      ...item,
      title: item.title || item.judul || item.name || "",
      description: item.description || item.ringkasan || item.deskripsi || item.desc || "",
      date: item.date || item.tanggal || item.tahun || item.year || "",
      category: item.category || item.kategori || "",
      image: item.image || item.gambar || item.imageUrl || item.thumbnail || item.src || "",
    });

    setEditingIndex(index);
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function saveItem(e) {
    e.preventDefault();

    if (!form.title.trim()) {
      setMessage("Judul atau nama wajib diisi.");
      return;
    }

    const oldItem =
      editingIndex >= 0 ? currentList[editingIndex] : {};

    const baseItem = {
      ...oldItem,
      id: oldItem.id || `${active}-${Date.now()}`,
      title: form.title.trim(),
      description: form.description,
      ...(active === "history" ? { year: form.date } : { date: form.date }),
      category: form.category,
      image: form.image,
    };

    let newItem = baseItem;

    if (active === "news") {
      newItem = {
        ...baseItem,
        judul: form.title.trim(),
        ringkasan: form.description,
        tanggal: form.date,
        kategori: form.category || "Informasi sekolah",
        gambar: form.image || oldItem.gambar || "/images/hero-smansa.jpg",
        alt: oldItem.alt || form.title.trim(),
        isi: Array.isArray(oldItem.isi) && oldItem.isi.length
          ? oldItem.isi
          : [form.description].filter(Boolean),
      };
    } else if (active === "achievements") {
      newItem = {
        ...baseItem,
        judul: form.title.trim(),
        deskripsi: form.description,
        tahun: form.date,
        gambar: form.image || oldItem.gambar || "/images/prestasi-siswa.jpg",
        alt: oldItem.alt || form.title.trim(),
      };
    } else if (active === "gallery") {
      newItem = {
        ...baseItem,
        title: form.title.trim(),
        category: form.category || "Kegiatan sekolah",
        image: form.image || oldItem.image || "/images/kegiatan-smansa.jpg",
      };
    } else if (active === "extracurriculars") {
      newItem = {
        ...baseItem,
        title: form.title.trim(),
        description: form.description,
        image: form.image || oldItem.image || "/images/kegiatan-smansa.jpg",
      };
    }

    const updatedList = [...currentList];

    if (editingIndex >= 0) {
      updatedList[editingIndex] = newItem;
    } else {
      updatedList.unshift(newItem);
    }

    const updatedContent = {
      ...content,
      [active]: updatedList,
    };

    setContent(updatedContent);

    if (saveContent(updatedContent)) {
      setMessage(
        editingIndex >= 0
          ? "Konten berhasil diperbarui di browser ini."
          : "Konten berhasil ditambahkan di browser ini."
      );
      setForm(emptyItem);
      setEditingIndex(-1);
    } else {
      setMessage("Gagal menyimpan konten.");
    }
  }

  function deleteItem(index) {
    if (!window.confirm("Yakin ingin menghapus konten ini?")) {
      return;
    }

    const updatedContent = {
      ...content,
      [active]: currentList.filter((_, i) => i !== index),
    };

    setContent(updatedContent);

    if (saveContent(updatedContent)) {
      setMessage("Konten berhasil dihapus dari browser ini.");
    } else {
      setMessage("Gagal menghapus konten.");
    }

    if (editingIndex === index) {
      setForm(emptyItem);
      setEditingIndex(-1);
    }
  }

  function saveObject() {
    if (saveContent(content)) {
      setMessage("Perubahan berhasil disimpan di browser ini.");
    } else {
      setMessage("Gagal menyimpan perubahan.");
    }
  }

  const stats = [
    { label: "Berita", key: "news" },
    { label: "Prestasi", key: "achievements" },
    { label: "Foto Galeri", key: "gallery" },
    { label: "Ekstrakurikuler", key: "extracurriculars" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800 md:flex">
      <aside className="flex w-full flex-col bg-[#102747] p-5 text-white md:sticky md:top-0 md:h-screen md:w-64 md:shrink-0 md:p-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-xl font-bold">
            S
          </div>
          <div>
            <p className="text-sm font-bold tracking-widest">
              SMANSA
            </p>
            <p className="mt-1 text-xs text-blue-100/60">
              Admin Portal
            </p>
          </div>
        </Link>

        <div className="mb-3 mt-9 text-[10px] font-bold tracking-[0.2em] text-blue-200/50">
          MENU UTAMA
        </div>

        <nav className="grid grid-cols-2 gap-2 md:flex md:flex-col">
          {menus.map((item) => (
            <button
              key={item.key}
              onClick={() => changeMenu(item.key)}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${
                active === item.key
                  ? "bg-white font-semibold text-[#102747] shadow-lg"
                  : "text-blue-100/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="w-5 text-center text-lg">
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-6 border-t border-white/10 pt-5 md:mt-auto">
          <Link
            href="/"
            target="_blank"
            className="block rounded-xl px-3 py-3 text-sm text-blue-100/80 transition hover:bg-white/10 hover:text-white"
          >
            ↗ Lihat Website
          </Link>

          <button
            onClick={() => {
              sessionStorage.removeItem("smansa-admin-demo");
              window.location.href = "/admin/login";
            }}
            className="mt-2 w-full rounded-xl border border-white/15 px-3 py-3 text-left text-sm text-white/80 transition hover:bg-white/10"
          >
            ↪ Keluar dari Admin
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1 px-4 py-6 sm:px-7 md:px-10 md:py-9">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-blue-800">
              SMA NEGERI 1 PEMALANG
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {active === "home"
                ? "Dashboard"
                : currentMenu.label}
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Kelola informasi website sekolah dengan mudah.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-900">
              A
            </div>
            <div>
              <p className="text-sm font-semibold">Administrator</p>
              <p className="mt-1 text-xs text-slate-400">
                Pengelola website
              </p>
            </div>
          </div>
        </header>

        {message && (
          <div
            role="status"
            className="mb-6 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-900"
          >
            {message}
          </div>
        )}

        {active === "home" && (
          <>
            <section className="mb-7 overflow-hidden rounded-2xl bg-[#17385f] p-7 text-white sm:p-9">
              <p className="text-xs font-bold tracking-[0.2em] text-blue-200">
                CONTENT MANAGEMENT SYSTEM
              </p>
              <h2 className="mt-4 max-w-xl text-2xl font-semibold leading-snug sm:text-3xl">
                Selamat datang di panel pengelolaan SMANSA.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100/75">
                Atur profil, berita, prestasi, dan dokumentasi
                sekolah melalui menu yang tersedia.
              </p>
              <button
                onClick={() => changeMenu("news")}
                className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#102747] transition hover:bg-blue-50"
              >
                Kelola Berita →
              </button>
            </section>

            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <button
                  key={stat.key}
                  onClick={() => changeMenu(stat.key)}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-slate-900">
                    {(content[stat.key] || []).length}
                  </p>
                  <p className="mt-3 text-xs font-semibold text-blue-800">
                    Kelola konten →
                  </p>
                </button>
              ))}
            </section>

            <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">
                Pintasan Pengelolaan
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {menus.slice(1).map((item) => (
                  <button
                    key={item.key}
                    onClick={() => changeMenu(item.key)}
                    className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-4 text-left text-sm transition hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <span>{item.label}</span>
                    <span className="text-blue-800">→</span>
                  </button>
                ))}
              </div>
            </section>
          </>
        )}

        {active === "home" || active === "profile" ? (
          active === "profile" && (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-lg font-semibold">
                Informasi Profil Sekolah
              </h2>
              <p className="mb-6 mt-2 text-sm text-slate-500">
                Ubah teks dan gambar profil sekolah.
              </p>

              <div className="space-y-5">
                {Object.entries(content.profile || {}).map(
                  ([field, value]) => {
                    if (field.toLowerCase().includes("image")) {
                      return (
                        <div key={field}>
                          <label className="mb-2 block text-sm font-semibold">
                            {field}
                          </label>
                          {value && (
                            <img
                              src={value}
                              alt="Preview profil"
                              className="mb-3 h-40 w-full rounded-xl object-cover sm:w-64"
                            />
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              uploadImage(e.target.files?.[0], field)
                            }
                            className="block w-full text-sm"
                          />
                        </div>
                      );
                    }

                    return (
                      <label key={field} className="block">
                        <span className="mb-2 block text-sm font-semibold">
                          {field}
                        </span>
                        {String(value || "").length > 100 ? (
                          <textarea
                            rows={4}
                            value={value || ""}
                            onChange={(e) =>
                              updateObject(field, e.target.value)
                            }
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-800"
                          />
                        ) : (
                          <input
                            value={value || ""}
                            onChange={(e) =>
                              updateObject(field, e.target.value)
                            }
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-800"
                          />
                        )}
                      </label>
                    );
                  }
                )}

                <button
                  onClick={saveObject}
                  className="rounded-xl bg-[#102747] px-5 py-3 text-sm font-semibold text-white hover:bg-[#193b65]"
                >
                  Simpan Profil
                </button>
              </div>
            </section>
          )
        ) : null}

        {active === "history" && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold">
              Sejarah Sekolah
            </h2>
            <p className="mb-6 mt-2 text-sm text-slate-500">
              Edit informasi sejarah sekolah.
            </p>

            <div className="space-y-5">
              {currentList.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 p-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-semibold">
                      Tahun
                      <input
                        value={item.year || ""}
                        onChange={(e) => {
                          const next = [...currentList];
                          next[index] = {
                            ...item,
                            year: e.target.value,
                          };
                          setContent({ ...content, history: next });
                        }}
                        className="mt-2 w-full rounded-lg border border-slate-200 p-3 font-normal"
                      />
                    </label>
                    <label className="text-sm font-semibold">
                      Judul
                      <input
                        value={item.title || ""}
                        onChange={(e) => {
                          const next = [...currentList];
                          next[index] = {
                            ...item,
                            title: e.target.value,
                          };
                          setContent({ ...content, history: next });
                        }}
                        className="mt-2 w-full rounded-lg border border-slate-200 p-3 font-normal"
                      />
                    </label>
                  </div>
                  <label className="mt-4 block text-sm font-semibold">
                    Deskripsi
                    <textarea
                      rows={3}
                      value={item.description || ""}
                      onChange={(e) => {
                        const next = [...currentList];
                        next[index] = {
                          ...item,
                          description: e.target.value,
                        };
                        setContent({ ...content, history: next });
                      }}
                      className="mt-2 w-full rounded-lg border border-slate-200 p-3 font-normal"
                    />
                  </label>
                  <button
                    onClick={() => deleteItem(index)}
                    className="mt-4 text-sm font-semibold text-red-600 hover:text-red-800"
                  >
                    Hapus
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setContent({
                  ...content,
                  history: [
                    ...currentList,
                    {
                      year: "",
                      title: "",
                      description: "",
                    },
                  ],
                });
              }}
              className="mt-5 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
            >
              + Tambah Periode Sejarah
            </button>

            <button
              onClick={saveObject}
              className="ml-2 mt-5 rounded-xl bg-[#102747] px-5 py-3 text-sm font-semibold text-white"
            >
              Simpan Sejarah
            </button>
          </section>
        )}

        {isList && active !== "history" && (
          <>
            <section className="mb-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="mb-6">
                <h2 className="text-lg font-semibold">
                  {editingIndex >= 0
                    ? "Edit Konten"
                    : "Tambah Konten Baru"}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Isi formulir di bawah, lalu simpan.
                </p>
              </div>

              <form onSubmit={saveItem} className="space-y-5">
                <label className="block text-sm font-semibold">
                  Judul atau Nama
                  <input
                    value={form.title}
                    onChange={(e) =>
                      updateForm("title", e.target.value)
                    }
                    placeholder="Masukkan judul konten"
                    required
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal outline-none focus:border-blue-800"
                  />
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-semibold">
                    {active === "history" ? "Tahun" : "Tanggal"}
                    <input
                      value={form.date}
                      onChange={(e) =>
                        updateForm("date", e.target.value)
                      }
                      placeholder="Contoh: 2026"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal outline-none focus:border-blue-800"
                    />
                  </label>

                  <label className="block text-sm font-semibold">
                    Kategori
                    <input
                      value={form.category}
                      onChange={(e) =>
                        updateForm("category", e.target.value)
                      }
                      placeholder="Contoh: Akademik"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal outline-none focus:border-blue-800"
                    />
                  </label>
                </div>

                <label className="block text-sm font-semibold">
                  Deskripsi
                  <textarea
                    rows={4}
                    value={form.description}
                    onChange={(e) =>
                      updateForm("description", e.target.value)
                    }
                    placeholder="Tuliskan informasi konten..."
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal outline-none focus:border-blue-800"
                  />
                </label>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Gambar Konten
                  </label>
                  <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 px-5 py-8 text-center transition hover:border-blue-400 hover:bg-blue-50/30">
                    <span className="text-2xl">＋</span>
                    <span className="mt-2 text-sm font-semibold">
                      Pilih gambar dari perangkat
                    </span>
                    <span className="mt-1 text-xs text-slate-400">
                      PNG, JPG, atau WebP · Maksimal 700 KB
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        uploadImage(e.target.files?.[0], "form")
                      }
                      className="sr-only"
                    />
                  </label>

                  {form.image && (
                    <div className="mt-4">
                      <img
                        src={form.image}
                        alt="Preview gambar konten"
                        className="max-h-64 w-full rounded-xl border border-slate-100 object-cover sm:w-96"
                      />
                      <button
                        type="button"
                        onClick={() => updateForm("image", "")}
                        className="mt-2 text-xs font-semibold text-red-600"
                      >
                        Hapus gambar
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="rounded-xl bg-[#102747] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#193b65]"
                  >
                    {editingIndex >= 0
                      ? "Simpan Perubahan"
                      : "Tambah Konten"}
                  </button>

                  {editingIndex >= 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        setForm(emptyItem);
                        setEditingIndex(-1);
                      }}
                      className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
                    >
                      Batal
                    </button>
                  )}
                </div>
              </form>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">
                    Daftar {currentMenu.label}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    {currentList.length} konten tersimpan di browser.
                  </p>
                </div>
                <button
                  onClick={saveObject}
                  className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold hover:bg-slate-50"
                >
                  Simpan Semua
                </button>
              </div>

              {currentList.length === 0 ? (
                <div className="rounded-xl border border-dashed border-slate-200 px-5 py-12 text-center">
                  <p className="text-3xl">▤</p>
                  <p className="mt-3 font-semibold">
                    Belum ada konten
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Tambahkan konten melalui formulir di atas.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {currentList.map((item, index) => (
                    <article
                      key={index}
                      className="flex flex-col gap-4 rounded-xl border border-slate-100 p-4 sm:flex-row sm:items-center"
                    >
                      {(item.image ||
                        item.imageUrl ||
                        item.thumbnail) && (
                        <img
                          src={
                            item.image ||
                            item.imageUrl ||
                            item.thumbnail
                          }
                          alt={item.title || item.name || "Gambar"}
                          className="h-24 w-full rounded-lg object-cover sm:w-28"
                        />
                      )}

                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-slate-900">
                          {item.title || item.judul || item.name || "Tanpa judul"}
                        </h3>
                        <p className="mt-1 text-xs text-slate-400">
                          {item.date || item.tanggal || item.tahun || item.year || ""}
                          {item.category || item.kategori
                            ? ` · ${item.category || item.kategori}`
                            : ""}
                        </p>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                          {item.description || item.ringkasan || item.deskripsi || "Belum ada deskripsi."}
                        </p>
                      </div>

                      <div className="flex shrink-0 gap-2">
                        <button
                          onClick={() => editItem(index)}
                          className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold hover:bg-slate-50"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteItem(index)}
                          className="rounded-lg border border-red-100 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                        >
                          Hapus
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </>
        )}

        <footer className="mt-8 text-xs leading-6 text-slate-400">
          Panel Admin · SMA Negeri 1 Pemalang
          <br />
          Perubahan saat ini disimpan di browser yang digunakan.
          Data belum otomatis dipublikasikan ke seluruh pengunjung.
        </footer>
      </main>
    </div>
  );
}

export default function AdminPage() {
  return (
    <AdminGuard>
      <DashboardContent />
    </AdminGuard>
  );
}
