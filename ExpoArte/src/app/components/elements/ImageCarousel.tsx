"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ImageType = {
  src: string;
  alt: string;
  titulo: string;
  descricao: string;
};

type ImageCarouselProps = {
  images: ImageType[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const router = useRouter();

  return (
    <div className="relative">
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: #6b7280 !important; /* Tailwind gray-500 */
          }
        `}
      </style>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={1.1}
        breakpoints={{
          400: { slidesPerView: 1.2, spaceBetween: 16 },
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          768: { slidesPerView: 2.2, spaceBetween: 24 },
          1024: { slidesPerView: 3.2, spaceBetween: 24 },
        }}
        style={{ paddingBottom: "1.5rem" }}
      >
        {images.map((img) => (
          <SwiperSlide key={img.src}>
            <div
              className="relative rounded overflow-hidden shadow bg-white flex justify-center items-center group"
              style={{
                width: "90vw",
                height: "40vw",
                maxWidth: "100%",
                maxHeight: "60vh",
              }}
            >
              <style>
                {`
                  @media (min-width: 640px) {
                    .swiper-slide > div {
                      width: 45vw !important;
                      height: 40vh !important;
                    }
                  }
                  @media (min-width: 1024px) {
                    .swiper-slide > div {
                      width: 30vw !important;
                      height: 40vh !important;
                    }
                  }
                `}
              </style>
              {/* Botão de expandir */}
              <button
                onClick={() =>
                  router.push(`/imagem/${encodeURIComponent(img.src.replace(/^\//, ""))}`)
                }
                className="absolute top-3 left-3 z-10 p-2 rounded-full bg-white hover:bg-opacity-80 transition"
                style={{
                  lineHeight: 0,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px 0 rgba(0,0,0,0.18)",
                }}
                aria-label="Expandir imagem"
              >
                <img
                  src="/expandimage.png"
                  alt="Expandir"
                  width={24}
                  height={24}
                  style={{ display: "block" }}
                />
              </button>
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={800}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  backgroundColor: "#e5e7eb",
                }}
                className="rounded"
              />
              {/* Gradiente, título e descrição */}
              <div
                className={`
                  absolute left-0 bottom-0 w-full
                  pointer-events-none
                  transition-all duration-300
                  h-16 group-hover:h-28
                `}
              >
                <div
                  className={`
                    absolute left-0 bottom-0 w-full h-full
                    transition-all duration-300
                  `}
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.0) 100%)",
                  }}
                />
                <div
                  className={`
                    absolute left-0 bottom-0 w-full px-4 pb-3 pt-2
                    flex flex-col gap-1
                    transition-all duration-300
                  `}
                  style={{ pointerEvents: "auto" }}
                >
                  <span
                    className={`
                      text-white text-lg font-semibold drop-shadow
                      transition-all duration-300
                    `}
                  >
                    {img.titulo}
                  </span>
                  <span
                    className={`
                      text-white text-sm opacity-0 max-h-0
                      transition-all duration-300
                      group-hover:opacity-100 group-hover:max-h-32 group-hover:mt-1
                      overflow-hidden
                    `}
                  >
                    {img.descricao}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}