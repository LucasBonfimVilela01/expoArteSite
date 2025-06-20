"use client";
import { useState } from "react";
import HeaderPadrao from "../components/elements/header";
import React from "react";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");

  // Passa search e setSearch via contexto ou props, conforme necessidade
  // Exemplo simples: clona o elemento children e injeta a prop search
  return (
    <>
      <HeaderPadrao search={search} setSearch={setSearch} />
      {children &&
        typeof children === "object" &&
        "props" in children
        ? (
          // Clona o children e injeta a prop search
          // Isso só funciona se o children for um único elemento React
          // Para múltiplos, use Context API
          <>
            {Array.isArray(children)
              ? children.map((child, idx) =>
                  child && typeof child === "object" && "props" in child
                    ? React.cloneElement(child as React.ReactElement<any>, { search })
                    : child
                )
              : React.cloneElement(children as React.ReactElement<any>, { search })}
          </>
        )
        : children}
    </>
  );
}