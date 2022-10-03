import WalletActivity from "./WalletAndActivity/WalletActivity";
import BalanceAssets from "./BalanceAndAssets/BalanceAssets";

const Treasury = () => {
  return (
    <div className="mt-[65px] pb-[150px]">
      <div className="flex flex-col items-center xl:flex-row-reverse xl:items-start xl:justify-center">
        <WalletActivity />
        <div className="mt-11 xl:mt-0">
          <BalanceAssets />
        </div>
      </div>
    </div>
  );
};

export default Treasury;
