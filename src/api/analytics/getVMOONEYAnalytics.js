import { createClient } from "urql";
import moment from "moment";
const APIURL = "https://api.studio.thegraph.com/query/38443/vmooney/v0.1.52";
const client = createClient({
  url: APIURL,
});
export async function getVMOONEYData() {
  const query = `
    query {
      supplies(orderBy: blockTimestamp) {
        supply
        blockTimestamp
      }
        holders(where: {totalValue_gt: "0"}, orderBy: initialLock){
            id
            totalValue
            locktime
            initialLock
        }
      }
    `;
  let totalHolders = 0;
  let totalBalance = 0;
  const res = await client.query(query).toPromise();
  const balance = res.data.supplies.map((d) => ({
    balance: d.supply / 10 ** 18,
    date: moment.unix(d.blockTimestamp).format("YYYY-MM-DD HH:mm"),
  }));

  const holders = res.data.holders.map((d) => {
    totalHolders++;
    return {
      x: moment.unix(d.initialLock).format("YYYY-MM-DD"),
      y: totalHolders,
    };
  });
  const distribution = res.data.holders.map((d) => ({
    id: `${d.id.slice(0, 6)}...${d.id.slice(-4)}`,
    label: d.id.slice(6),
    value:
      d.totalValue / res.data.supplies[res.data.supplies.length - 1].supply,
  }));
  return { balance, holders, distribution };
}
