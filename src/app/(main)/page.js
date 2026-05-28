import Header from "@/components/header/Header";
import Instructors from "@/components/main/Instructors";
import InstructorCard from "@/components/main/Instructors";
import LearningTips from "@/components/main/LearningTips";
import PopularCourses from "@/components/main/PopularCourses";
import TrendingCourses from "@/components/main/TrendingCourses";
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
          <Instructors></Instructors>
        </div>
        <TrendingCourses></TrendingCourses>
      </main>
    </div>
  );
}
