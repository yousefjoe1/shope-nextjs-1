import { getData } from "@/app/_actions/getData";
import ProductCard from "@/app/_common/ProductCard/ProductCard";
import { ProductItem } from "@/app/_types/Products";

const ProductsSection = async ({
  title,
  link,
  api = "products",
}: {
  title: string;
  link: string;
  api?: string;
}) => {
  const getCartData = await getData(api);
  console.log("🚀 ~ getCartData:", getCartData);

  return (
    <section className="p-4 md:p-8 container mx-auto">
      <h3 className="font-bold text-center text-4xl mb-5">{title}</h3>

      <div className="grid overflow-hidden grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {!getCartData.data ? (
          <>
          {
            [1,2,3,4].map(s=>(
              <div key={s} className="mx-2">

              </div>
            ))
          }
          </>
        ) : (
          <>
            {getCartData.data.map((product: ProductItem) => (
              <ProductCard prod={product} key={product._id} />
            ))}
          </>
        )}
      </div>

      <div className="flex justify-center mt-10"></div>
    </section>
  );
};

export default ProductsSection;
