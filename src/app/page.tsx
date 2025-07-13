import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import About from "../components/About";
import Collections from "../components/Collections";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <main className="flex-1">
        <FeaturedProducts />
        <Collections />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
