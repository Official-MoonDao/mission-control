import { useState, useEffect } from "react";

export const useAssets = () => {
  const url = "https://safe-client.gnosis.io/v1/chains/1/safes/0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9/balances/USD?exclude_spam=true&trusted=false";

  const [tokens, setTokens] = useState([]);
  const [balanceSum, setBalanceSum] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.error) {
            setError(true);
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

  return { tokens, isLoaded, balanceSum, error };
};

const transformAssets = (result) => {
  let tokenArr = [];
  let balanceSum = 0.0;
  balanceSum = parseFloat(result.fiatTotal);

  result.items.forEach((token) => {
    tokenArr.push({
      balance: parseFloat(token.balance) / 10 ** parseFloat(token.tokenInfo.decimals),
      symbol: token.tokenInfo.symbol,
      usd: parseFloat(token.fiatBalance),
      address: token.tokenInfo.address,
    });
  });

  return [
    balanceSum
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    tokenArr,
  ];
};
