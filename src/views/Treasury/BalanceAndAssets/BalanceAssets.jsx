import { useState, useEffect } from "react";
import AssetSkeletons from "../../../components/Skeletons/AssetSkeletons";
import Assets from "./Assets";
import { transformAssets } from "../../../hooks&utils/transformAssets";
import TreasuryBalance from "./TreasuryBalance";
import { errorToast } from "../../../hooks&utils/errorToast";

// MoonDAO Multsig Wallet address.
const MULTISIG_ADDRESS = "0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9";
const ETHPLORER_API_BASE = "https://api.ethplorer.io/";
const ETHPLORER_API_KEY = "freekey";

const BalanceAssets = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tokens, setTokens] = useState([]);
  const [balanceSum, setBalanceSum] = useState(null);

  const url = ETHPLORER_API_BASE + `getAddressInfo/${MULTISIG_ADDRESS}` + `?apiKey=${ETHPLORER_API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          if(result.error){
            setError(true)
            return;
          }
          
          const [balanceSum, tokens] = transformAssets(result);

          setBalanceSum(balanceSum);
          setTokens(tokens);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

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
        className="mt-10 inline-block font-Montserrat text-xl text-slate-800 underline decoration-amber-600 decoration-2 hover:text-black hover:decoration-[3px] dark:text-moon-gold dark:decoration-moon-gold dark:hover:text-amber-200 xl:text-[22px]"
        href="https://etherscan.io/address/0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9"
        target="_blank"
      >
        View MoonDAO on Etherscan
      </a>
    </section>
  );
};

export default BalanceAssets;