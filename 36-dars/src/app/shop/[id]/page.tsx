import ProductInner from "@/app/_components/product-inner";

const ShopInner = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <ProductInner id={id} />;
};

export default ShopInner;
