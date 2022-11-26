import { createClient } from "urql";
import moment from "moment";
const APIURL = "https://api.studio.thegraph.com/query/38443/vmooney/v0.1.812";
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
      holders(where: {totalLocked_gt: "0"}, orderBy: initialLock){
            id
            totalLocked
            locktime
            initialLock
      }
      deposits(orderBy: blockTimestamp) {
        increaseVMooney
        ts
      }
      withdraws(orderBy: blockTimestamp) {
        decreaseVMooney
        ts
      }
    }
    `;
  let totalHolders = 0;
  let totalVMooney = 0;
  const res = await client.query(query).toPromise();
  const balance = res.data.deposits.map((d, i) => {
    const deposit = {
      balance: totalVMooney + Math.abs(d.increaseVMooney) / 10 ** 18,
      date: moment.unix(d.ts).format("YYYY-MM-DD HH:mm"),
    };
    totalVMooney += Math.abs(d.increaseVMooney) / 10 ** 18;
    return deposit;
  });
  const supply = res.data.supplies.reduce((avg, s, _, arr) => {
    return avg + s.supply / arr.length;
  }, 0);
  const holders = res.data.holders.map((d) => {
    totalHolders++;
    return {
      x: moment.unix(d.initialLock).format("YYYY-MM-DD"),
      y: totalHolders,
    };
  });
  const distribution = res.data.holders.map((d) => ({
    id: `${d.id.slice(0, 4)}...${d.id.slice(-4)}`,
    label: d.id,
    value:
      d.totalLocked / res.data.supplies[res.data.supplies.length - 1].supply,
  }));
  return { balance, holders, distribution };
}
