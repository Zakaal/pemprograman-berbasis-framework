import type { Metadata } from "next";
import Image from "next/image";
import imageProfil from '../../public/images/profil.jpg';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya',
  keywords: 'tentang saya, biodata, profil',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya',
    type: 'website',
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5dc] to-white px-6 py-10 flex justify-center items-start">
    <div className="flex flex-col md:flex-row gap-6 items-stretch w-full max-w-5xl">
      
      {/* Kotak Navy - Foto Profil */}
      <div className="bg-[#1f2937] text-white rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center md:w-1/3">
        <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-white shadow-lg mb-4">
          <Image
            src={imageProfil}
            alt="Foto Profil"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Kotak Putih - Deskripsi */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 flex-1">
        <h1 className="text-3xl font-bold text-[#1f2937]">Mochammad Zakaro Al Fajri</h1>
        <p className="mt-4 text-zinc-700 leading-relaxed text-justify">
          Saya adalah mahasiswa Teknik Informatika di <strong>Politeknik Negeri Malang</strong> 
          dengan fokus utama pada Desain UI/UX dan Frontend. Saya aktif mempelajari teknologi 
          terkini seperti <strong>Next.js</strong>, <strong>Flutter</strong>, serta konsep konsep dasar terkait UI/UX.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-700">
          <div><span className="font-semibold text-[#bfa76f]">📍 Asal:</span> Kabupaten Tulungagung</div>
          <div><span className="font-semibold text-[#bfa76f]">🎓 Kampus:</span> Politeknik Negeri </div>
          <div><span className="font-semibold text-[#bfa76f]">🚀 Fokus:</span> UI/UX Design, Frontend</div>
          <div><span className="font-semibold text-[#bfa76f]">🧠 Studi:</span> D-IV Teknik Informatika</div>
        </div>
      </div>
    </div>
  </div>
  );
}