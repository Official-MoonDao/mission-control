import axios from "axios";
import moment from "moment";
export async function getHistoricalMOONEYBalance() {
  let data;
  await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/mooney/market_chart?vs_currency=usd&days=max&interval=monthly"
    )
    .then((res) => {
      data = [
        {
          id: "mooney",
          color: "hsl(38, 70%, 50%)",
          data: res.data.prices.map((price) => ({
            x: String(moment(price[0]).format("YYYY-MM-DD")),
            y: price[1].toFixed(3),
          })),
        },
      ];
    });
  return data;
}
export async function getHistoricalMOONEYBalanceBar() {
  let data = [];
  await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/mooney/market_chart?vs_currency=usd&days=max&interval=monthly"
    )
    .then((res) => {
      data = res.data.prices.filter(
        (price) => String(moment(price[0]).format("DD")) === "01"
      );
    });
  const formatted = data.map((arr) => ({
    date: String(moment(arr[0]).format("YYYY-MM-DD")),
    balance: arr[1].toFixed(3),
  }));
  return formatted;
}
