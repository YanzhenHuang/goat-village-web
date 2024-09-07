import Link from "next/link";
import { useState } from "react";
import NavBar from "@/components/NavBar";

import { StaggeredSection } from "@/components/StaggeredSection";
import { TitledTextBlock } from "@/components/TitledTextBlock";
import ImageGallery from "@/components/ImageGallery";
import { shuffle } from "@/utils/func_tools";


import { gpz_texts } from "@/public/blogs/gpz"

export default function Home() {
  return (
    <main className="flex flex-col items-center sm:items-start">
      <title>Goat Village - 博客</title>
      {/* Header */}
      <NavBar />
      <section className={`flex flex-wrap px-5 py-16 items-center justify-center w-full min-h-[50vh]`}>
        <div className={`p-8 bg-white drop-shadow-xl whitespace-pre-line max-w-[120vh] rounded-xl`}>
          <div className={`flex flex-col gap-2`}>
            <div className={`flex flex-row items-center justify-between`}>
              <h1 className={`font-bold text-2xl`}>台风小记</h1>
              <p className={`opacity-50`}>2024-09-06</p>
            </div>
            <h2 className={`opacity-50`}>郭芃泽</h2>
          </div>
          <div>
            <p>{gpz_texts[0]}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
