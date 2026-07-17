import HeroSection from "./compenents/home/hero";
import CategoriesSection from "./compenents/home/categories";
import ProductsSection from "./compenents/home/products";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
    </main>
  );
}
