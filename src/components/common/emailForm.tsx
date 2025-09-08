"use client";
import { Package } from "@/utilities/types/package";
import React from "react";

type ComponentProps = {
  item: Package | null;
  subject: string;
  message: string | null;
  text: string;
};

const EmailForm: React.FC<ComponentProps> = ({
  item,
  subject,
  message,
  text,
}) => {
  const handleSendEmail = () => {
    if (message == null && item != null) {
      message = `${item.name}: $${item.price}`;
    } else if (message == null) {
      message = "";
    }
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:${"Sales@WallaceAV"}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full max-w-xl m-auto">
      <div className="text-center">
        <form>
          <button
            className="hover:text-accent"
            type="button"
            onClick={handleSendEmail}
          >
            {text}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
