const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="p-10 flex items-center justify-evenly w-full bg-green-800 text-white border-black border-t-2">
      <div className="text-center">
        <p>
          &copy; {getCurrentYear()}
          <span></span> | Joseph Wallace | Arizona
        </p>
      </div>
    </div>
  );
};

export default Footer;
