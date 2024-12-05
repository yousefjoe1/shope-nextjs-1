import { getData } from "@/app/_actions/getData";
import ProductCard from "@/app/_common/ProductCard/ProductCard";
import { ProductItem } from "@/app/_types/Products";
import { Skeleton } from "@/components/ui/skeleton";

const ProductsSection = async ({
  title,
  link,
  api = "products",
}: {
  title: string;
  link: string;
  api?: string;
}) => {

  const getCartData = await getData('products?extraQuery=new-arrivals&count=4');
  console.log("🚀 ~ getCartData:", getCartData)

  return (
    <section className="p-4 md:p-8 container mx-auto">
      <h3 className="font-bold text-center text-4xl mb-5">{title}</h3>

      {!getCartData.data ?
       ( <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>)
       : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getCartData.data.map((product: ProductItem) => (
            <ProductCard prod={product} key={product._id} />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-10">
      </div>
    </section>
  );
};

export default ProductsSection;
