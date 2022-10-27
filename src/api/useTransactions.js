import { useState, useEffect } from "react";

export const useTransactions = () => {
  // MoonDAO Multsig Wallet address.
  const MULTISIG_ADDRESS = "0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9";
  const ETHERSCAN_API_BASE = "https://api.etherscan.io/api";
  const ETHERSCAN_API_KEY = "TJ95PY19ASCIBJQWX4T77V9MTHG7P57CKS";

  const [transactions, setTransactions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const url = ETHERSCAN_API_BASE + `?module=account&action=tokentx&address=${MULTISIG_ADDRESS}` + `&page=1` + `&offset=10` + `&sort=desc` + `&apikey=${ETHERSCAN_API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTransactions(result.result);
        },
        (error) => setError(error)
      );
  }, []);

  return { transactions, isLoaded, error };
};
