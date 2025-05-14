"use client";
import { getFromStorage, removeFromStorage } from "@/utilities/localStorage";
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
        <div className="w-full flex flex-col items-center">
          {storage.map((item: any) => (
            <div key={item.item.productId}>
              <p>{item.item.name}</p>
              <button onClick={() => removeFromStorage(item.item.productId)}>
                Remove Item
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty, come back later!</p>
      )}
    </div>
  );
}
