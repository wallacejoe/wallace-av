"use client";
import ComponentCard from "@/components/common/componentCard";
import EmailForm from "@/components/common/emailForm";
import React, { useState } from "react";

export default function Page() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const subjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const messageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <ComponentCard title="Contact Us">
        <div className="w-full flex flex-col justify-center items-center">
          <input
            type="text"
            value={subject}
            onChange={subjectChange}
            placeholder="Subject"
            className="w-full px-4 py-2 border border-black rounded-lg hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            //type="text"
            value={message}
            onChange={messageChange}
            placeholder="Write your message here:"
            className="w-full resize-none mt-10 mb-5 px-4 py-2 border border-black rounded-lg hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <EmailForm
            item={null}
            subject={subject}
            message={message}
            text={"Send Email"}
          />
        </div>
      </ComponentCard>
    </div>
  );
}
