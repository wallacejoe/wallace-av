"use client";
import { addToStorage } from "@/utilities/localStorage";
import { useEffect, useState } from "react";

export default function AddToCart(value: any | null) {
  const [item, setItem] = useState("");

  const addItem = () => {
    setItem(value);
  };

  useEffect(() => {
    addToStorage(item);
  }, [item]);

  return <button onClick={addItem}>Add to cart</button>;
}
