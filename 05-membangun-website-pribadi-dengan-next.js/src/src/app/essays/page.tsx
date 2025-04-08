import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Esai',
  description: 'Kumpulan tulisan dan pemikiran saya.',
  openGraph: {
    title: 'Esai',
    description: 'Kumpulan tulisan dan pemikiran saya.',
  },
};

const articles = [
  {
    title: "Refleksi tentang sila pertama Pancasila ",
    description: 
    "Sila pertama Pancasila, Ketuhanan yang Maha Esa, menekankan pentingnya kepercayaan kepada Tuhan sebagai fondasi utama dalam kehidupan berbangsa dan bernegara. ",
    slug: "/esai/sila-pertama",
  },
  {
    title: "Refleksi tentang sila kedua Pancasila ",
    description: "Sila kedua Pancasila, Kemanusiaan yang Adil dan Beradab, mencerminkan nilai-nilai luhur yang menjunjung martabat setiap manusia.",
    slug: "/esai/sila-kedua",
  },
  {
    title: "Refleksi tentang sila ketiga Pancasila ",
    description: "Sila ketiga, Persatuan Indonesia, menekankan pentingnya menjaga dan memperkuat rasa kebangsaan di tengah keberagaman.",
    slug: "/esai/sila-ketiga",
  },
];

export default function Essays() {
  return (
    <div className="mt-16 px-8 pb-8"> {/* Tambahkan padding bawah */}
      <header className="mb-8">
        <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
        <p className="text-zinc-600 mt-2">Kumpulan tulisan dan pemikiran saya.</p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.slug}
            className="border rounded-2xl p-4 hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-lg text-zinc-800">{article.title}</h2>
            <p className="text-zinc-600 mt-1 text-sm">{article.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

