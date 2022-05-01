import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  // Runs on page load only
  useEffect(() => {
    // call function to get stats from db
  }, []);

  return (
    <div className="">
      <Head>
        <title>Mail Stats</title>
        <meta
          name="description"
          content="Check out the mail stats published by your argon."
        />
        <link rel="icon" href="/mail.ico" />
      </Head>

      <main className="grid grid-cols-2 gap-6 place-items-center min-h-screen bg-gradient-to-br from-slate-800 to-green-900">
        <h1 className="col-span-2 text-8xl text-white font-black py-12">
          Mail Stats
        </h1>

        {/* Do you have mail? */}
        <div className="w-4/5 bg-transparent border-slate-500 border-4 h-64 rounded-3xl p-6 shadow-2xl text-white hover:border-green-300 hover:shadow-green-300">
          <h2 className="text-2xl text-white font-bold">Do you have mail?</h2>
          <div className="flex pt-12">
            <div className="w-1/2 pl-6 font-black text-6xl">YES</div>
            <div className="w-1/2 text-2xl font-bold">
              There is currently mail in your mailbox
            </div>
          </div>
        </div>

        {/* Number of opens */}
        <div className="w-4/5 bg-transparent border-slate-500 border-4 h-64 rounded-3xl p-6 shadow-2xl text-white hover:border-green-300 hover:shadow-green-300">
          <h2 className="text-2xl text-white font-bold">Number of opens</h2>
          <div className="flex pt-12">
            <div className="w-1/2 text-6xl font-black pl-6">
              4 <span className="text-2xl font-black">Opens</span>
            </div>
            <div className="w-1/2 text-2xl font-bold pr-16">
              Since this tracker was installed on your mailbox.
            </div>
          </div>
        </div>

        {/* Number of opens */}
        <div className="w-4/5 bg-transparent border-slate-500 border-4 h-64 rounded-3xl p-6 shadow-2xl text-white hover:border-green-300 hover:shadow-green-300">
          <h2 className="text-2xl text-white font-bold">
            Average Delivery Time
          </h2>
          <div className="flex pt-12">
            <div className="w-1/2 text-6xl font-black pl-2">
              10:36 <span className="text-2xl font-black">Am</span>
            </div>
            <div className="w-1/2 text-2xl font-bold pl-4">
              is when your mail is normally delivered
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
