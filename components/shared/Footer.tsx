import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        {/* Copyright */}
        <p>2024 MyWAY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
