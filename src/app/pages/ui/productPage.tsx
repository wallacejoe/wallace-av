import React from "react";
//import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { products } from "@/app/lib/placeholder-data";

export default async function ProductPage(/*{ query }: { query: string }*/) {
  //const products = await fetchProducts(query); Will be added with database and
  //query, or search, functionality.

  return (
    <div className="w-3/4 grid grid-cols-3 gap-10">
      {products.map((product) => (
        <Link
          href={`#` /*`/dashboard/products/${product.product_id}`*/}
          // Link will be added to/with individual product pages
          key={product.product_id}
          className="w-fit p-2 flex bg-neutral-500 rounded-lg justify-center box-border"
        >
          <div>
            <div className="w-full h-24 mb-3 bg-orange-300"></div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
