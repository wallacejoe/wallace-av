"use client";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const handleSendEmail = () => {
    const mailtoLink = `mailto:${"Sales@WallaceAV"}?`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="p-10 flex items-center justify-evenly w-full bg-green-800 text-white border-black border-t-2">
      <div className="text-center">
        <p>
          &copy; {getCurrentYear()}
          <span></span> | Joseph Wallace | Arizona
        </p>
        <section className="max-lg:w-full mt-5 max-lg:text-center">
          <h3 className="text-lg mb-2">Contact Us:</h3>
          <form>
            <ul className="text-lg">
              <button type="button" onClick={handleSendEmail}>
                <li className="hover:text-purple-400">Sales@WallaceAV.com</li>
              </button>
              <li>(602) 692-8470</li>
            </ul>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Footer;
