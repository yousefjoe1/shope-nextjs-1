
const ProductsSection = ({
  title,
  link,
  api = "products",
}: {
  title: string;
  link: string;
  api?: string;
}) => {


  

  return (
    <section className="p-4 md:p-8 container mx-auto">
      <h3 className="font-bold text-center text-4xl mb-5">{title}</h3>

      {/* {isLoading ? (
        <ProductsSkeleton />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.data?.map((product: ProductItem) => (
            <Product prod={product} key={product._id} />
          ))}
        </div>
      )} */}

      <div className="flex justify-center mt-10">
      </div>
    </section>
  );
};

export default ProductsSection;
