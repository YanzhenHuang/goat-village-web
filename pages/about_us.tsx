import Link from "next/link";
import { useState } from "react";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <title>Goat Village - 关于我们</title>
      {/* Header */}
      <NavBar />
      <section className={`flex flex-col items-center justify-center w-full`}>
        <img src={`../images/hyz_logo/logo_flower.png`} />
        <div>s</div>
      </section>
    </main>
  );
}
