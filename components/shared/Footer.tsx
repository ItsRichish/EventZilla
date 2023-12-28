import Image from "next/image";

const Footer = () => {
  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between wrapper">
        <Image
          src="/assets/images/logo.svg"
          alt="EventZilla Logo"
          width={128}
          height={38}
        />
      </div>
    </header>
  );
};

export default Footer;
