//import axios from "axios";
import { products } from "@/app/lib/placeholder-data";
import { notFound } from "next/navigation";
import { Product, GetProduct } from "@/utilities/types/product";

const getProduct = ({ id }: GetProduct): Product => {
  return products[id];
};

type ProductDetailsProps = {
  params: Promise<{ id: string }>;
};

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { id } = await params;
  const item = await getProduct({ id: Number(id) });

  if (!item) return notFound();

  return (
    <div className="">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default ProductDetails;
