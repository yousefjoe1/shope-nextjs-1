
import AosAnimations from "./_components/AosAnimations";
import Hero from "./_components/Hero/Hero";
import ProductsSection from "./_components/Products/ProductsSection";

export default function Home() {

  return (
    <div className="">
      <AosAnimations />
        <Hero />

        <ProductsSection title='New Arrival' link="new-arrival" api="products?extraQuery=new-arrivals&count=4"/>

    </div>
  );
}
