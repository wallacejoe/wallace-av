import React from "react";
//import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { products } from "@/app/lib/placeholder-data";

export default async function ProductPage(/*{ query }: { query: string }*/) {
  //const products = await fetchProducts(query); Will be added with database and
  //query, or search, functionality.

  return (
    <div>
      {products.map((product) => (
        <Link
          href={`#` /*`/dashboard/products/${product.product_id}`*/}
          // Link will be added to/with individual product pages
          key={product.product_id}
        >
          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
