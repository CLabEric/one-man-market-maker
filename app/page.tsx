"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex justify-between flex-col min-h-screen">
      <NavBar />
      <main className="m-2.5">
        <section className="">
          <div className="flex flex-col max-w-lg m-auto">
            <div className="flex bg-slate-50 p-4 h-28 rounded-2xl">
              <input
                className="grow bg-slate-50 outline-none text-4xl"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                autoCorrect="off"
                pattern="^[0-9]*[.,]?[0-9]*$"
                placeholder="0"
              />
              <div className="flex flex-col justify-center">Eth</div>
            </div>
            <div className="flex bg-slate-50 p-4 h-28 mt-2 rounded-2xl">
              <input
                className="grow bg-slate-50 outline-none text-4xl"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                autoCorrect="off"
                pattern="^[0-9]*[.,]?[0-9]*$"
                placeholder="0"
              />
              <div className="flex flex-col justify-center">Base</div>
            </div>
            <button className="bg-sky-100 text-sky-600 h-12 mt-2 rounded-2xl">
              Trade
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
