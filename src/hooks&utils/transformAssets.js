export const transformAssets = (result) => {
  let tokenArr = [];
  let balanceSum = 0.0;
  balanceSum += result.ETH.balance * result.ETH.price.rate;

  result.tokens.forEach((token) => {
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
  tokenArr.sort((a, b) => b.usd - a.usd);

  return [
    balanceSum
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    tokenArr,
  ];
};
