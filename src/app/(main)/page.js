import Header from "@/components/header/Header";
import LearningTips from "@/components/main/LearningTips";
import PopularCourses from "@/components/main/PopularCourses";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#00272c]">
      <header>
        <Header></Header>
      </header>
      <main>
        <PopularCourses></PopularCourses>
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          <LearningTips></LearningTips>
        </div>
      </main>
    </div>
  );
}
