import WalletActivity from "./WalletAndActivity/WalletActivity";
import BalanceAssets from "./BalanceAndAssets/BalanceAssets";

const Treasury = () => {
  return (
    <div className="mt-[65px] pb-[150px] xl:px-6">
      {/*Add desktop row reverse here*/}
      <div className="flex flex-col items-center">
        <WalletActivity />
        {/*Remove margin top for true desktop view*/}
        <div className="mt-11">
          <BalanceAssets />
        </div>
      </div>
    </div>
  );
};

export default Treasury;
