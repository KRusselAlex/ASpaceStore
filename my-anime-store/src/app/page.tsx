import Footer from "@/components/footer/footer";
import HeroSection from "@/components/home/hero/hero";
import NewProductSection from "@/components/home/newProduct/newProduct";
import ProductSection from "@/components/home/product/product";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/jinx.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Navbar />
        <HeroSection />
      </div>
      <ProductSection />
      <NewProductSection />
      <ProductSection />

      <Footer />
    </div>
  );
}
