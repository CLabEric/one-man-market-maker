// "use client";

import { MainModal } from "./components/MainModal";
import { WalletConnection } from "./components/WalletConnection";

export default function Home() {
  return (
    <div className="homePage">
      <main>
        <header>
          <span className="">One Man Market Maker</span>

          <WalletConnection />
        </header>
        <MainModal />
      </main>
      <footer className="">footer</footer>
    </div>
  );
}
