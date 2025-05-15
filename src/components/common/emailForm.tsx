import { getFromStorage } from "@/utilities/localStorage";
import React, { useEffect, useState } from "react";

const EmailForm = () => {
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Populate email content from localStorage
    const data = getFromStorage() || "No ordered products.";
    const storedMessage = data
      .map(
        (product) => `${product.item.name}: $${product.item.price.toFixed(2)}`
      )
      .join("\n\n");
    setRecipient("Sales@WallaceAV.com");
    setMessage(storedMessage);
  }, []);

  const handleSendEmail = () => {
    const subject = `Rental Request`;
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full max-w-xl m-auto p-20">
      <div className="text-center">
        <form>
          <button type="button" onClick={handleSendEmail}>
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
