import TransactionSkeletons from "../../../components/Skeletons/TransactionSkeletons";
import Transaction from "./Transaction";
import { Line } from "../../../components/Layout";
import LinkButton from "../../../components/LinkButton";
import Header from "../../../components/Header";
import { errorToast } from "../../../utilities/errorToast";
import { useTransactions } from "../../../api/useTransactions";

const WalletTransactions = () => {
  const { transactions, isLoaded, error } = useTransactions();

  if (error) errorToast("Connection with Etherscan failed. Contact MoonDAO if the problem persists 🚀");

  return (
    <section className="mt-12 lg:mt-0 xl:w-[45%] xl:max-w-[700px]">
      <div className="flex flex-row items-center justify-between">
        <Header text="Recent Activity" />
        <div className="hidden treasury:block">
          <LinkButton text={"Gnosis"} link={"https://gnosis-safe.io/app/eth:0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9/home"} img={"/coins/SAFE.png"} />
        </div>
      </div>

      <Line />

      <div className="mt-10">{!isLoaded || error ? <TransactionSkeletons /> : transactions.map((e, i) => <Transaction key={i} data={e} />)}</div>
    </section>
  );
};

export default WalletTransactions;
