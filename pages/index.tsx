import Link from "next/link";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import ImageGallery from "@/components/ImageGallery";
import { shuffle } from "@/utils/func_tools";
import { TitledTextBlock } from "@/components/TitledTextBlock";

export default function Home() {
  return (
    <main className="flex flex-col row-start-2 items-center sm:items-start">
      <title>Goat Village - 主页</title>
      {/* Header */}
      <NavBar />

      {/* 封面Section */}
      <section className={`flex flex-col items-center justify-center w-full`}>
        <img src={`../images/photos/index/cover.jpg`} className={`w-full h-auto`} />
      </section>

      {/* 羊村编年史 */}
      <section className={`flex flex-row pl-5 py-16 items-center justify-around w-full min-h-[50vh]`}>
        {/* 标题-文字 */}
        <TitledTextBlock
          content={{
            title: "羊村编年史",
            annotation: "编辑于2024年9月6日",
            text: `最初，羊村只由杨芷涵、陈子睿、黄彦祯组成，仅仅是一个计算机专业抱团小组织。团队发展初期也接纳了新成员，但是由于各自发展道路不通而导致关系不深。
            
              大二下学期，李若璇和郭芃泽的加入后，羊村内部开始形成向心力，团队正式确定名称为“羊村”。该学期也是疫情结束后的第一个学期，大家出去玩的次数也多了。
              
              在这段时间内，羊村当前的格局正式确立下来。此后，羊村在该五人的基础上蓬勃发展。
              
              大四上，Goat Village这一英文名的确立正式赋予了羊村新的一层含义。GOAT，即“山羊”之英文，亦有“Greates Of All Time”的含义, 寓意遇见已是上上签。
              
              仅以此页，纪念大学四年。`
          }}
          direction={`left`} />

        <ImageGallery
          galleryRootDir={`../images/photos/index/creation/`}
          imageFileNames={
            shuffle([
              `yangzhihan.jpg`,
              `all.jpg`,
              `chenzirui_chill.jpg`,
              `liruoxuan.jpg`,
              `miniso.jpg`,
              `bob_pizza.jpg`])
          }
          bigImgPos={{ x: "left" }} />
      </section>

      {/* 家乡 */}
      <section className={`flex flex-row pl-5 py-16 items-center justify-around w-full min-h-[50vh]`}>
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

        {/* 标题-文字 */}
        <TitledTextBlock
          content={{
            title: "羊村出行",
            annotation: "[IP属地] 中国香港",
            text: `ssss`
          }}
          direction={`right`} />
      </section>
    </main>
  );
}
