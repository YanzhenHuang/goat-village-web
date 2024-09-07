import Link from "next/link";
import { useState } from "react";
import NavBar from "@/components/NavBar";

import { StaggeredSection } from "@/components/StaggeredSection";
import { TitledTextBlock } from "@/components/TitledTextBlock";
import ImageGallery from "@/components/ImageGallery";
import { shuffle } from "@/utils/func_tools";


import {texts} from "@/public/blogs/gpz"

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <title>Goat Village - 博客</title>
      {/* Header */}
      <NavBar />
      <StaggeredSection direction={`right`}>
        {/* 标题-文字 */}
        <TitledTextBlock
          content={{
            title: "羊村出行",
            annotation: "[IP属地] 中国香港",
            text: texts[0]
          }}
          direction={`right`} />

        <ImageGallery
          galleryRootDir={`../images/photos/index/travel/`}
          imageFileNames={
            shuffle([
              `depart.jpg`,
              `dock.jpg`,
              `gpz_sleep.jpg`,
              `hk_road.jpg`,
              `hk_street.jpg`,
              `lrx_icecream_car.jpg`,
              `lrx_sleep.jpg`])
          }
          bigImgPos={{ x: "right" }} />
      </StaggeredSection>
    </main>
  );
}
