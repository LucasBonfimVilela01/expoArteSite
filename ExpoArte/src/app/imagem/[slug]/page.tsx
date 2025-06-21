"use client";
import { useParams, useRouter } from "next/navigation";
import { categorias } from "../../data/categorias";
import Image from "next/image";

export default function ImagemDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  // Procura a imagem pelo src (slug)
  let imagemEncontrada = null;
  let categoriaNome = "";
  for (const cat of categorias) {
    const img = cat.imagens.find(
      (img) => img.src.replace(/^\//, "") === decodeURIComponent(slug)
    );
    if (img) {
      imagemEncontrada = img;
      categoriaNome = cat.nome;
      break;
    }
  }

  if (!imagemEncontrada) {
    return (
      <div className="p-8 text-center text-gray-600 min-h-screen flex flex-col justify-start items-center">
        <h2>Imagem não encontrada</h2>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 rounded-lg shadow bg-blue-100 text-gray-600 font-semibold transition-transform duration-100 hover:bg-blue-200 hover:translate-y-[-1px] active:translate-y-[2px] focus:outline-none"
          style={{
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
            border: "none",
            cursor: "pointer",
            display: "inline-block",
          }}
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-4 text-gray-600 overflow-auto">
      <button
        onClick={() => router.back()}
        className="mb-4 self-start px-4 py-2 rounded-lg shadow bg-blue-100 text-gray-600 font-semibold transition-transform duration-100 hover:bg-blue-200 hover:translate-y-[-1px] active:translate-y-[2px] focus:outline-none"
        style={{
          boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
          border: "none",
          cursor: "pointer",
          display: "inline-block",
        }}
      >
        ← Voltar
      </button>
      <div
        style={{
          width: "80vw",
          maxWidth: "1000px",
          height: "calc(80vw * 0.6)",
          maxHeight: "520px",
          background: "#f3f4f6",
          borderRadius: "24px",
          boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
          position: "relative",
        }}
      >
        <Image
          src={imagemEncontrada.src}
          alt={imagemEncontrada.alt}
          fill
          sizes="70vw"
          style={{
            objectFit: "contain",
            borderRadius: "24px",
            background: "transparent",
          }}
          className="shadow"
        />
      </div>
      <div className="mt-2 w-full max-w-xl bg-blue-100 rounded p-6 shadow">
        <h2 className="text-neutral-800 text-2xl font-bold mb-2">
          {imagemEncontrada.titulo}
        </h2>
        <p className="mb-2">{imagemEncontrada.descricao}</p>
        <p className="text-sm text-gray-500">
          Categoria: {categoriaNome}
        </p>
      </div>
    </div>
  );
}