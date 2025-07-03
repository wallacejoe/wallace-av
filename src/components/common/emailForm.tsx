"use client";

const EmailForm = ({ item }: Any) => {
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
