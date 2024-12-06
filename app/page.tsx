
import AosAnimations from "./_components/AosAnimations";
import Hero from "./_components/Hero/Hero";
import ProductsSection from "./_components/Products/ProductsSection";

export default function Home() {

  return (
    <section className="">
      <AosAnimations />
        <Hero />

        <ProductsSection title='New Arrival'  api="products?extraQuery=new-arrivals&count=4"/>
        <ProductsSection title='Most Viewd' api="products?count=4"/>

    </section>
  );
}
