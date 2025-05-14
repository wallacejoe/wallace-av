"use client";
import { getFromStorage } from "@/utilities/localStorage";
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
    <div>
      {storage.length > 0 ? (
        <div>
          {storage.map((item: any) => (
            <div key={item.item.productId}>{item.item.name}</div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty, come back later!</p>
      )}
    </div>
  );
}
