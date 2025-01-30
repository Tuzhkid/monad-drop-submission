// app/wallet/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isAddress } from "ethers";
import { Loader2 } from "lucide-react";

export default function Wallet() {
  const [wallet, setWallet] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e?.preventDefault();
    if (!isAddress(wallet)) {
      setError("Invalid address. Enter your EVM compatible address");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/wallet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wallet }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to submit wallet");

      // Navigate to success page
      router.push("/success");
    } catch (error) {
      setLoading(false);
      setError((error as any)?.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[calc(100vh-60px)] flex items-center justify-center flex-col bg-[#fef5e7]"
    >
      <h1 className="text-2xl lg:text-4xl mb-5 text-black">Submit your wallet address</h1>
      <label>
        <input
          type="text"
          value={wallet}
          onChange={(e) => {
            if (e.target.value?.length === 0) {
              setError("");
            }
            setWallet(e.target.value);
          }}
          required
          className="text-black p-2 rounded-xl w-[19rem] lg:w-[29rem] mx-auto"
        />
      </label>
      {error && (
        <p className="text-left mt-1 text-sm" style={{ color: "red" }}>
          {error}
        </p>
      )}
      <button
        className="mt-5 bg-gray-800 text-white hover:text-gray-800 px-4 py-2 hover:bg-white transition-all rounded-lg"
        type="submit"
      >
        {loading ? (
          <div className="px-5 py-1">
            <Loader2 className="animate-spin h-4 w-4" />
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}
