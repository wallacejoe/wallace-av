//import axios from "axios";
import { products } from "@/app/lib/placeholder-data";
import { notFound } from "next/navigation";
import { Product, GetProduct } from "@/utilities/types/product";
import ComponentCard from "@/components/common/componentCard";

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
    <div className="w-full flex flex-col items-center">
      <ComponentCard title={item.name}>
        <div className="w-full flex flex-col justify-center items-center">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </div>
      </ComponentCard>
    </div>
  );
};

export default ProductDetails;
