"use client";
import EmailForm from "@/components/common/emailForm";
import { getFromStorage, removeFromStorage } from "@/utilities/localStorage";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [storage, setStorage] = useState<any>([]);
  useEffect(() => {
    try {
      const data = getFromStorage();
      return setStorage(data);
    } catch (error: any) {
      console.error("Error fetching local storage:", error);
    }
  }, []);

  return (
    <div className="mt-2 w-full flex flex-col justify-items-center">
      {storage.length > 0 ? (
        <div className="w-full flex flex-col items-center">
          {storage.map((item: any) => (
            <div
              className="mb-4 w-fit p-2 flex flex-col justify-center box-border bg-neutral-500 rounded-lg"
              key={item.item.productId}
            >
              <Link
                href={`/pages/products/${item.item.productId}`}
                // Link will be added to/with individual product pages
                key={item.item.productId}
                className="w-full rounded-lg p-2 box-border"
              >
                <div className="w-full h-24 bg-orange-300 rounded-lg"></div>
              </Link>
              <h2>{item.item.name}</h2>
              <button onClick={() => removeFromStorage(item.item.productId)}>
                Remove Item
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty, come back later!</p>
      )}
      <EmailForm />
    </div>
  );
}
