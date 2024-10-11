"use client";

import ConnectBtn from "@/components/ConnectBtn";
import { useAccount, useDisconnect } from "wagmi";

export default function Home() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <ConnectBtn></ConnectBtn>
        </div>
        {isConnected ? <div>{address}</div> : <div>Please Connect Wallet</div>}
        {isConnected ? (
          <button onClick={() => disconnect()}>Disconnect</button>
        ) : (
          <></>
        )}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
