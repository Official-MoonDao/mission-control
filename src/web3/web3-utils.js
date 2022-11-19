import Contract from "web3-eth-contract";
import vMOONEY_ABI from "./vMOONEY-ABI.json";
const vMOONEY_ADDRESS = "0xCc71C80d803381FD6Ee984FAff408f8501DB1740";
Contract.setProvider(process.env.ALCHEMY_API_KEY);
const contract = new Contract(vMOONEY_ABI, vMOONEY_Address);

export async function getTotalSupplyOnDate() {
  const balance = await contract.methods.totalSupplyAt("15985925").call();
  console.log(balance);
}
getTotalSupplyOnDate();
