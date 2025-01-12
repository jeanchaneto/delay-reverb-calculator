const Footer = () => {
  return (
    <div className="pb-8 pt-8 max-w-4xl mx-auto absolute bottom-0 right-6 ">
      <p className="text-xs text-foreground-400">
        &copy; {new Date().getFullYear()} Created by
        <a href="https://lap-studios.com/" className="text-foreground-300 ml-1">
          LAP Studios
        </a>
        . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
