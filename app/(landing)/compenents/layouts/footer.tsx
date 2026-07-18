import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-light  text-black">
      <div className="max-w-6xl mx-auto px-7 py-7 flex justify-between items-start">
        <div className="w-w-sm">
          <Image
            src="/images/logo.svg"
            alt="logo sporton footer"
            width={183}
            height={132}
          />
          <div className=" max-w-md">
            <p className="mt-5 text-base">
              Engineered for endurance and designed for speed. Experience gear that moves as fast as you do.
            </p>
          </div>
         
        </div>
        <div className="w-110 grid grid-cols-2 ">
          <div className="flex gap-5 flex-col px-12">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Products</Link>
            <Link href="#">About Us</Link>
          </div>
          <div className="flex gap-5 flex-col px-12">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">TikTok</Link>
            <Link href="#">YouTube</Link>
          </div>
        </div>
      </div>
     <div className="border-t-2 border-dark/10">
     <div className="max-w-6xl mx-auto px-10 py-4 flex justify-between">
    <div>SportsOn © 2026 All Rights Reserved.</div>

    <div className="grid grid-cols-2 w-110  gap-10 px-10">
      <Link href="#">Privacy Policy</Link>
      <Link href="#">Terms Conditions</Link>
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;
