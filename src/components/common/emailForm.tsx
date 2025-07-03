"use client";
//import { getFromStorage } from "@/utilities/localStorage";
//import React, { useEffect, useState } from "react";

const EmailForm = ({ item }: Any) => {
  /*const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Populate email content from localStorage
    // Cart feature was discarded. Saving code in case of change
    const data = getFromStorage() || "No ordered products.";
    const storedMessage = data
      .map(
        (product) => `${product.item.name}: $${product.item.price.toFixed(2)}`
      )
      .join("\n\n");
    setRecipient("Sales@WallaceAV.com");
    setMessage(storedMessage);
  }, []);*/

  const handleSendEmail = () => {
    const message = `${item.name}: $${item.price}`;
    const subject = `Rental Request`;
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:${"Sales@WallaceAV"}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full max-w-xl m-auto p-20">
      <div className="text-center">
        <form>
          <button type="button" onClick={handleSendEmail}>
            Order Package
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
