"use client"

import Image from "next/image";
import React from "react";
import headerImg from "@/app/components/Gh--jxCXUAEJzB6.jpeg";
import Link from "next/link";

const GaynadsLandingPage = () => {

  return (
    <div className="min-h-[calc(100vh-60px)] bg-[#fef5e7] p-6">
      {/* Hero Section */}
      <header className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-4 items-center justify-center container mx-auto">
        <div className="text">
          <h1 className="text-4xl font-bold text-[#5e4f4b]">
            GayNads Pride Festival
          </h1>
          <p className="text-xl text-[#7d6f6a] mt-4">
            The official festival of the parallel EVM Gay cult
          </p>
          <p className="text-lg text-[#7d6f6a] font-semibold mt-2 mb-6">
            $GNADS is the ticker
          </p>
          <Link href={'/submit-wallet'} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Get $GNADS Now
          </Link>
        </div>
        <div className="img flex justify-center mt-4 lg:mt-0">
          <Image src={headerImg} alt="" className="h-72 w-72" />
        </div>
      </header>

      {/* About Section */}
      <section className="py-10 container mx-auto">
        <h2 className="text-2xl font-semibold text-[#5e4f4b]">
          About the Festival
        </h2>
        <p className=" text-[#7d6f6a] max-w-3xl mt-4">
          Memecoins on Monad are about to go ballistic! GayNads Pride Festival
          celebrates the unique and vibrant community that supports $GNADS, the
          ticker for Monad&apos;s zesty purple chain.
        </p>
        <p className=" text-[#7d6f6a] max-w-3xl mt-4">
          If you have devnet access, submit your wallets for some $GNADS test
          tokens!
        </p>
        <div className="flex mt-6">
          <Link href={'/submit-wallet'} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Share Your Wallet
          </Link>
        </div>
      </section>

      {/* Community Section */}
      <section className=""></section>

      {/* Footer */}
      <footer className="py-6 text-center text-[#7d6f6a]">
        <p>&copy; 2025 GayNads. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default GaynadsLandingPage;
