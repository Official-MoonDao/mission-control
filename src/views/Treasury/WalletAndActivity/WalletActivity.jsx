import Wallet from "./Wallet";
import WalletTransactions from "./WalletTransactions";

const WalletActivity = () => {
  return (
    <div className="xl:relative xl:left-14 2xl:left-10 2xl:mt-20">
      <Wallet />
      <WalletTransactions />
    </div>
  );
};

export default WalletActivity;
