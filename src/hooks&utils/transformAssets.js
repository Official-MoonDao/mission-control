export const transformAssets = (result) => {
  let tokenArr = [];
  let balanceSum = 0.0;
  balanceSum = parseFloat(result.fiatTotal);

  result.items.forEach((token) => {
    tokenArr.push({
      balance: parseFloat(token.balance) / 10 ** parseFloat(token.tokenInfo.decimals),
      symbol: token.tokenInfo.symbol,
      usd: parseFloat(token.fiatBalance),
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
