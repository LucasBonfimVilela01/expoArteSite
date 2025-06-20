"use client";
import { useState } from "react";
import HeaderPadrao from "../elements/header";

export default function HeaderWrapper() {
  const [search, setSearch] = useState("");
  return <HeaderPadrao search={search} setSearch={setSearch} />;
}