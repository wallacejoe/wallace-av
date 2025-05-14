import { packages } from "@/app/lib/placeholder-data";
import Link from "next/link";
import React from "react";

export default async function PackagePage() {
  return (
    <div className="lg:w-3/4 lg:grid lg:grid-cols-3 gap-10 justify-items-center">
      {packages.map((item) => (
        <Link
          href={`/pages/packages/${item.packageId}`}
          key={item.packageId}
          className="max-lg:mb-8 w-fit p-2 flex bg-neutral-500 rounded-lg justify-center box-border"
        >
          <div>
            <div className="w-full h-24 mb-3 bg-orange-300"></div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
