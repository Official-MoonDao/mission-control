import { createClient } from "urql";
import moment from "moment";
const APIURL = import.meta.env.VITE_ANALYTICS_URL;
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
      holders(first:1000, orderBy: initialLock, orderDirection: asc,  where: {totalLocked_gt: "0"}){
            id
            totalLocked
            locktime
            initialLock
      }
      deposits(first: 1000, orderBy: blockTimestamp, where: {type_not: "3"}) {
        value
        locktime
        ts
      }
    }
    `;
  let now = new Date().getTime() / 1000;
  let totalHolders = 0,
    totalVMooney = 0,
    totalLockedMooney = 0;
  const res = await client.query(query).toPromise();
  const holders = res.data.holders
    .filter((h) => h.locktime > now)
    .map((h) => {
      totalHolders++;
      const mooney = h.totalLocked / 10 ** 18;
      const vmooney = mooney * ((h.locktime - now) / (4 * 365 * 86400));
      const holder = {
        x: moment.unix(h.initialLock).format("YYYY-MM-DD"),
        y: totalHolders,
        id: `${h.id.slice(0, 4)}...${h.id.slice(-4)}`,
        locktime: moment.unix(h.locktime).format("YYYY-MM-DD"),
        totalLocked: mooney,
        totalvMooney: vmooney,
      };
      totalLockedMooney += mooney;
      totalVMooney += vmooney;
      return holder;
    });
  const holdersByVMooney = [...holders].sort(
    (a, b) => b.totalvMooney - a.totalvMooney
  );
  const distribution = holders.map((h) => ({
    id: h.id,
    label: h.id,
    value: h.totalvMooney / totalVMooney,
  }));
  console.log(holdersByVMooney);
  return {
    holders,
    holdersByVMooney,
    distribution,
    totals: {
      vMooney: Math.round(totalVMooney).toLocaleString("en-US"),
      Mooney: Math.round(totalLockedMooney).toLocaleString("en-US"),
    },
  };
}
