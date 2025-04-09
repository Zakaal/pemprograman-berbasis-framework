import type { Metadata } from "next";
import { defaultMetaData } from "./utils/metadata";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman Tentang Saya.",
  openGraph: {
    images: "https://example.com/default-image.jpg",
    url: "https://example.com",
  },
};

export default function Home({ metadata }: any) {
  return (
    <div className="mt-16 px-8 max-w-4xl mx-auto pb-8">
      <header className="flex flex-col items-center text-center mb-12">
        <img
          src="/images/project3.png"
          alt="Foto Profil"
          className="w-35 h-35 mb-4 object-cover shadow-lg rounded-2xl"
        />
        <h1 className="font-bold text-4xl text-zinc-800">Mochammad Zakaro Al Fajri</h1>
        <p className="text-zinc-600 mt-2 max-w-xl">
        </p>
      </header>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-zinc-700 mb-2">Latar Belakang</h2>
          <p className="text-zinc-600">
            Saat ini saya sedang menempuh pendidikan di D-IV Teknik Informatika, Politeknik Negeri Malang. 
            Saya sering terlibat dalam berbagai proyek dan eksperimen terutama pada IU/UX dan Frontend.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-zinc-700 mb-2">Minat dan Keahlian</h2>
          <ul className="list-disc list-inside text-zinc-600">
            <li>Pengembangan Web (React, Next.js)</li>
            <li>Graphic Design</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-zinc-700 mb-2">Tujuan</h2>
          <p className="text-zinc-600">
            Saya bercita-cita untuk menjadi profesional IT yang tidak hanya menguasai teknologi, 
            tetapi juga mampu memberikan solusi nyata bagi masyarakat melalui inovasi digital.
          </p>
        </div>
      </section>
    </div>
  );
}
