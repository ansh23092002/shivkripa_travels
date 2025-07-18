import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Services from "../components/Services"
export default function Home() {
  return (
   <main className=" bg-zinc-300 ">
    <Navbar/>
    <Hero/>
    <Services/>
   </main>
  );
}
