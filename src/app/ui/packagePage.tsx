"use client";
import { packages } from "@/app/lib/placeholder-data";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function PackagePage() {
  const [value, setValue] = useState(packages);
  const [filter, setFilter] = useState("");

  const valueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    if (filter == "") {
      setValue(packages);
      return;
    }

    const filtered = packages.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    setValue(filtered);
  }, [filter]);

  return (
    <div className="lg:w-3/4 lg:grid lg:grid-cols-3 gap-10 justify-items-center">
      <input
        type="text"
        value={filter}
        onChange={valueChange}
        placeholder="Search..."
        className="col-span-3 w-full px-4 py-2 border border-black rounded-lg hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {value.map((item) => (
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
