import ConnectBtn from "@/components/ConnectBtn";
// import { useAccount, useDisconnect } from "wagmi";
// const { isConnected } = useAccount();
// const { disconnect } = useDisconnect();

export default function NavBar() {
  return (
    <nav className="flex justify-between m-2.5">
      <div className="flex items-center">
        <div className="mr-10">ONE MAN MARKET MAKER</div>
        <div className="flex">
          <div className="m-2.5">About</div>
          <div className="m-2.5">Team</div>
        </div>
      </div>

      <ConnectBtn></ConnectBtn>
    </nav>
  );
}
