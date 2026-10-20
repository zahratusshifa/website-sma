
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setError("");

    if (username === "admin" && password === "smansa123") {
      sessionStorage.setItem("smansa-admin-demo", "true");
      router.push("/admin");
    } else {
      setError("Username atau password salah.");
    }
  }

  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-2">
      <section className="relative hidden min-h-screen overflow-hidden bg-[#102747] p-12 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
        <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border border-white/10" />

        <Link href="/" className="relative z-10 flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-2 shadow-lg">
            <img
              src="/images/logo-smansa.png"
              alt="Logo SMA Negeri 1 Pemalang"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-bold tracking-[0.2em]">
              SMANSA
            </p>
            <p className="mt-1 text-xs text-blue-100/70">
              SMA Negeri 1 Pemalang
            </p>
          </div>
        </Link>

        <div className="relative z-10 max-w-xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-amber-300">
            ADMINISTRATION PORTAL
          </p>
          <h1 className="text-5xl font-semibold leading-tight xl:text-6xl">
            Mengelola informasi,
            <span className="mt-2 block text-blue-200">
              membangun inspirasi.
            </span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-8 text-blue-100/75">
            Selamat datang di ruang pengelolaan website
            SMA Negeri 1 Pemalang. Kelola profil, berita,
            prestasi, dan dokumentasi sekolah dalam satu tempat.
          </p>
          <div className="mt-10 h-1 w-20 rounded-full bg-amber-300" />
        </div>

        <p className="relative z-10 text-xs text-blue-100/60">
          © SMA Negeri 1 Pemalang · Admin Portal
        </p>
      </section>

      <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-900 lg:hidden"
          >
            ← Kembali ke website
          </Link>

          <div className="mb-9">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white p-2">
            <img
              src="/images/logo-smansa.png"
              alt="Logo SMA Negeri 1 Pemalang"
              className="h-full w-full object-contain"
            />
          </div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-blue-800">
              ADMINISTRATOR
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Selamat datang kembali
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Masuk ke dashboard untuk mengelola konten
              website sekolah.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Username
              </label>
              <input
                id="username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-800 focus:bg-white focus:ring-4 focus:ring-blue-900/5"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 pr-20 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-800 focus:bg-white focus:ring-4 focus:ring-blue-900/5"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-blue-800"
                >
                  {showPassword ? "Sembunyikan" : "Lihat"}
                </button>
              </div>
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-[#102747] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/10 transition hover:bg-[#193b65] focus:outline-none focus:ring-4 focus:ring-blue-900/15"
            >
              Masuk ke Dashboard →
            </button>
          </form>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <Link
              href="/"
              className="text-sm text-slate-500 transition hover:text-blue-900"
            >
              ← Kembali ke website utama
            </Link>
            <p className="mt-6 text-xs leading-5 text-slate-400">
              Akses khusus administrator SMA Negeri 1 Pemalang.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
