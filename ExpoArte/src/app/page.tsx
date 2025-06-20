
import ImageCarousel from "./components/elements/ImageCarousel";
import { categorias } from "./data/categorias";

export default function Home({ search = "" }: { search?: string }) {
  // Filtra as categorias e imagens conforme o termo de busca
  const categoriasFiltradas = categorias
    .map(cat => ({
      ...cat,
      imagens: cat.imagens.filter(img =>
        img.titulo.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(cat => cat.imagens.length > 0);

  return (
    <div className="min-h-screen p-8 sm:p-20 bg-white text-foreground">
      <h1 className="text-neutral-800 text-3xl font-bold mb-8 text-center">
        Galeria de Imagens
      </h1>
      <div className="space-y-12">
        {categoriasFiltradas.map((categoria) => (
          <section
            key={categoria.nome}
            className="rounded-xl bg-blue-300 shadow-md p-4"
          >
            <h2 className="text-neutral-600 text-2xl font-semibold mb-4 text-center bg-blue-200 rounded-xl py-2">
              {categoria.nome}
            </h2>
            <ImageCarousel images={categoria.imagens} />
          </section>
        ))}
        {categoriasFiltradas.length === 0 && (
          <div className="text-center text-gray-500 mt-12">
            Nenhuma imagem encontrada para sua busca.
          </div>
        )}
      </div>
    </div>
  );
}
