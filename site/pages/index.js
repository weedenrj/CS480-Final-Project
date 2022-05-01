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

      <main className="px-6 flex flex-col sm:grid sm:grid-cols-2 gap-6 place-items-center min-h-screen bg-gradient-to-br from-slate-800 to-green-900">
        <h1 className="col-span-2 text-4xl sm:text-8xl text-white font-black py-12">
          Mail Stats
        </h1>

        {/* Do you have mail? */}
        <div className="w-full  bg-transparent border-slate-500 border-4 h-64 rounded-3xl p-6 shadow-2xl text-white hover:border-green-300 hover:shadow-green-300">
          <h2 className="text-2xl text-white font-bold">Do you have mail?</h2>
          <div className="flex pt-12">
            <div className="w-1/2 sm:pl-6 font-black text-2xl sm:text-3xl lg:text-6xl">YES</div>
            <div className="w-1/2 text-base lg:text-2xl font-bold">
              There is currently mail in your mailbox
            </div>
          </div>
        </div>

        {/* Number of opens */}
        <div className="w-full  bg-transparent border-slate-500 border-4 h-64 rounded-3xl p-6 shadow-2xl text-white hover:border-green-300 hover:shadow-green-300">
          <h2 className="text-2xl text-white font-bold">Number of opens</h2>
          <div className="flex pt-12">
            <div className="w-1/2 text-2xl sm:text-3xl lg:text-6xl font-black sm:pl-6">
              4 <span className="text-lg sm:text-2xl font-black">Opens</span>
            </div>
            <div className="w-1/2 text-base lg:text-2xl font-bold lg:pr-16">
              Since this tracker was installed on your mailbox.
            </div>
          </div>
        </div>

        {/* Number of opens */}
        <div className="w-full mb-12  bg-transparent border-slate-500 border-4 h-64 rounded-3xl p-6 shadow-2xl text-white hover:border-green-300 hover:shadow-green-300">
          <h2 className="text-2xl text-white font-bold">
            Average Delivery Time
          </h2>
          <div className="flex pt-6 md:pt-12">
            <div className="w-1/2 text-2xl sm:text-3xl lg:text-6xl font-black sm:pl-2">
              10:36 <span className="text-base sm:text-2xl font-black">Am</span>
            </div>
            <div className="w-1/2 text-base lg:text-2xl font-bold sm:pl-4">
              is when your mail is normally delivered
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
