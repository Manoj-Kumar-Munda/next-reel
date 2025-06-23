import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-4">
        <h1 className="text-4xl font-bold">Reels</h1>
        <div className="flex items-center gap-4">
          <Link href={"/login"}> Login</Link>
          <Link href={"/register"}>Register</Link>
        </div>
      </nav>

      <section className="flex justify-center">
        <div className="">
          <h1>Stop scrolling</h1>
        </div>
      </section>
    </div>
  );
}
