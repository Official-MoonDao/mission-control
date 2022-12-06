export const allowedAssets = {
  MOONEY: true,
  DAI: true,
  ETH: true,
  JBX: true,
  USDC: true,
  USDT: true,
  SAFE: true,
  BUSD: true,
  SHIB: true,
  WBTC: true,
  UNI: true,
  WETH: true,
  MATIC: true,
  MANA: true,
  ENS: true,
};

/* 
This affects the TREASURY

Edit this Dictionary to allow Tokens to be displayed as Assets or Transactions.

The response from the API for both Assets and Transactions has a "tokenSymbol" property, entries whose tokenSymbol value isn't present in this dictionary are filtered out.
*/
