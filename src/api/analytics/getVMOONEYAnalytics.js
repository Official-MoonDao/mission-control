import { createClient } from "urql";
import moment from "moment";
const APIURL = "https://api.studio.thegraph.com/query/38443/vmooney/v0.0.8";
const client = createClient({
  url: APIURL,
});
export async function getVMOONEYData() {
  const query = `
    query {
        deposits(orderBy: ts) {
            id
            provider
            value
            locktime
            ts
            }
        holders(orderBy: initialLock) {
            id
            totalValue
            locktime
            initialLock
        }
        }
    `;
  const res = await client.query(query).toPromise();
  const deposits = res.data.deposits.map((d) => ({
    ...d,
    ts: moment.unix(d.ts).format("YYYY-MM-DD"),
  }));
  const holders = res.data.holders.map((d) => ({
    ...d,
    initialLock: moment.unix(d.initialLock).format("YYYY-MM-DD"),
  }));
  return { deposits, holders };
}
