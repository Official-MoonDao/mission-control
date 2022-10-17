import { useState, useEffect } from "react";
import AssetSkeletons from "../../../components/Skeletons/AssetSkeletons";
import Assets from "./Assets";
import TreasuryBalance from "./TreasuryBalance";

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
          console.log(result);
          var balanceSum = 0.0;
          balanceSum += result.ETH.balance * result.ETH.price.rate;
          var tokenArr = [];
          result.tokens.forEach((token) => {
            // console.log(token.rawBalance);
            // console.log(token.tokenInfo.price.rate);
            if (token.tokenInfo.price) {
              balanceSum += (token.rawBalance * token.tokenInfo.price.rate) / 10 ** token.tokenInfo.decimals;
              tokenArr.push({
                balance: parseFloat(token.rawBalance) / 10 ** parseFloat(token.tokenInfo.decimals),
                symbol: token.tokenInfo.symbol,
                usd: (token.rawBalance / 10 ** token.tokenInfo.decimals) * token.tokenInfo.price.rate,
              });
            }
          });

          tokenArr.push({ balance: result.ETH.balance, symbol: "ETH", decimal: 18, usd: result.ETH.balance * result.ETH.price.rate });

          balanceSum = balanceSum;
          setIsLoaded(true);
          setBalanceSum(
            balanceSum
              .toFixed(2)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          );
          setTokens(tokenArr);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

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
