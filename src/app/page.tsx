import Button from "@/components/button/Button";
import Image from "next/image";
import Hero from "public/hero.png"
export default function Home() {
  return (
    <main className="flex items-center gap-[100px]">
      <div className="flex-[1] flex flex-col gap-[50px]">
        <h1 className="text-7xl bg-gradient-to-b from-green-800 to-blue-300 text-transparent bg-clip-text">
          The Future of AI in the next few years
        </h1>
        <p className="text-2xl font-light">    Turning your Idea into Reality. We bring together the teams from the
          global tech industry.</p>
        <Button url="/portfolio" text="See our works" />
      </div>
      <div className="flex-[1] flex flex-col gap-[50px]">
        <Image src={Hero} alt="hero" className="w-full h-500 object-contain animate-move" />
      </div>
    </main>
  )
}
