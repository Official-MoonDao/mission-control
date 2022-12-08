import { createClient } from "urql";
import moment from "moment";

const APIURL = "https://api.studio.thegraph.com/query/38443/vmooney/v0.1.834";
const client = createClient({
  url: APIURL,
});

const now = new Date().getTime() / 1000;

export async function getVMOONEYData() {
  const query = `
    query {
      supplies(first:1, orderBy: blockNumber, orderDirection: desc) {
        supply
        blockTimestamp
      }
      holders(first:1000, orderBy: initialLock, orderDirection: asc,  where: {locktime_gt: ${Math.round(
        now
      )}}){
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
  let totalHolders = 0,
    totalVMooney = 0,
    averageStakingPeriod = 0;
  const res = await client.query(query).toPromise();
  console.log(res);
  const holders = res.data.holders.map((h, i, arr) => {
    totalHolders++;
    const mooney = h.totalLocked / 10 ** 18;
    const vmooney = mooney * ((h.locktime - now) / (4 * 365 * 86400));
    const holder = {
      x: moment.unix(h.initialLock).format("YYYY-MM-DD HH:mm"),
      y: totalHolders,
      id: `${h.id.slice(0, 4)}...${h.id.slice(-4)}`,
      address: h.id,
      locktime: moment.unix(h.locktime).format("YYYY-MM-DD"),
      totalLocked: mooney,
      totalvMooney: vmooney,
    };
    totalVMooney += vmooney;
    averageStakingPeriod += Number(h.locktime) / arr.length;
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
  const totalLockedMooney = res.data.supplies[0].supply / 10 ** 18;
  return {
    holders,
    holdersByVMooney,
    distribution,
    totals: {
      vMooney: totalVMooney,
      Mooney: totalLockedMooney,
      AvgStakingPeriod:
        Math.floor((averageStakingPeriod - now) / (3600 * 24)) + " days",
    },
  };
}
