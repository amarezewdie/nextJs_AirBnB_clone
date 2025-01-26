"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer hidden md:block"
      onClick={() => router.push("/")}
      role="button"
      aria-label="Go to homepage"
    >
      <Image
        alt="Airbnb Logo"
        src="/images/airbnb.png"
        height={70}
        width={70}
        priority
      />
    </div>
  );
};

export default Logo;
