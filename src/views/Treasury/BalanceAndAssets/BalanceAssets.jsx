import AssetSkeletons from "../../../components/Skeletons/AssetSkeletons";
import Assets from "./Assets";
import TreasuryBalance from "./TreasuryBalance";
import { errorToast } from "../../../utilities/errorToast";
import { useAssets } from "../../../api/useAssets";

const BalanceAssets = () => {
  const { tokens, isLoaded, balanceSum, error } = useAssets();

  if (error) errorToast("Connection with Etherscan failed. Click the link below to see MoonDAO assets.");

  return (
    <section className="xl:w-[40%] xl:max-w-[600px]">
      {!isLoaded || error ? (
        <AssetSkeletons />
      ) : (
        <>
          <TreasuryBalance balance={balanceSum} />
          <Assets tokens={tokens} />
        </>
      )}

      <a
        className="mt-10 inline-block font-Montserrat text-lg text-blue-900 underline hover:decoration-blue-700 decoration-blue-500 hover:text-blue-950 hover:decoration-[2px] dark:text-yellow-100 dark:decoration-white dark:hover:text-moon-gold"
        href="https://etherscan.io/address/0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9"
        target="_blank"
      >
        View MoonDAO on Etherscan
      </a>
    </section>
  );
};

export default BalanceAssets;
