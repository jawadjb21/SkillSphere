import Header from "@/components/header/Header";
import PopularCourses from "@/components/main/PopularCourses";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <PopularCourses></PopularCourses>
      </main>
    </>
  );
}
