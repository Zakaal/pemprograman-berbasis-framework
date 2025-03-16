import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman Tentang Saya.',
  openGraph : {
    title:'Tentang Saya',
    description: 'Halaman Tentang Saya.',
  }
}

export default function Essays(){
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-blod text-4xl text-zinc-800">Tentang Saya</h1>
      </header>
    </div>
  );
}