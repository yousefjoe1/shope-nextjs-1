import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="bg-white-100 min-h-screen font-inter">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 px-4 py-12 lg:pr-12">
              <h1 className="font-cairo text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-gray-600 mb-6">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Link
                title="Shop Now"
                href="/shop"
                className="inline-block bg-black text-white py-3 px-8 rounded-full font-semibold hover:bg-gray-800 transition duration-300"
              >
                Shop Now
              </Link>
              <div className="flex flex-wrap justify-between mt-12">
                <div className="flex items-center justify-center sm:justify-start w-[calc(50%-0.5rem)] sm:w-auto">
                  <div className="text-center sm:text-left">
                    <h2 className="text-3xl font-bold">200+</h2>
                    <p className="text-gray-600">International Brands</p>
                  </div>
                  <div className="w-px h-12 bg-gray-300 mx-4"></div>
                </div>
                <div className="flex items-center justify-center sm:justify-start w-[calc(50%-0.5rem)] sm:w-auto">
                  <div className="text-center sm:text-left">
                    <h3 className="text-3xl font-bold">2,000+</h3>
                    <p className="text-gray-600">High-Quality Products</p>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-gray-300 mx-4"></div>
                </div>
                <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto mt-4 sm:mt-0">
                  <div className="text-center sm:text-left">
                    <h3 className="text-3xl font-bold">30,000+</h3>
                    <p className="text-gray-600">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex items-center">
              <img
                width={500}
                height={400}
                src={"/images/hero-section.jpg"}
                alt="Stylish couple wearing fashionable clothes"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
        <div className="bg-black py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8">
              <Image
                src={"/images/versace-logo.svg"}
                alt="Versace"
                className="h-8 w-auto"
                loading="lazy"
                width={300}
                height={200}
              />
              <Image
                src={"/images/zara-logo.svg"}
                alt="Zara"
                className="h-8 w-auto"
                loading="lazy"
                width={300}
                height={200}
              />
              <Image
                src={"/images/gucci-logo.svg"}
                alt="Gucci"
                className="h-8 w-auto"
                loading="lazy"
                width={300}
                height={200}
              />
              <Image
                src={"/images/prada-logo.svg"}
                alt="Prada"
                className="h-8 w-auto"
                loading="lazy"
                width={300}
                height={200}
              />
              <Image
                src={"/images/calvin-logo.svg"}
                alt="Calvin Klein"
                className="h-8 w-auto"
                loading="lazy"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
