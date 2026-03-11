const Footer = () => {
  return (
    <footer className="h-20 flex items-center justify-center border-t border-border bg-white overflow-hidden">
      <p className="text-sm text-[#777777]">
        &copy; {new Date().getFullYear()} Muskan Shrestha
      </p>
    </footer>
  );
};

export default Footer;
