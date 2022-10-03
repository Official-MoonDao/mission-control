import Transaction from "./Transaction"
import {transactionTests} from "../../../test-data/tests"

const WalletTransactions = () => {
  return (
    <div className="mt-4 xl:mt-0 xl:bg-white xl:bg-opacity-60 xl:dark:bg-opacity-[0.04] xl:px-9 xl:pt-[30px] xl:pb-[50px] xl:rounded-lg xl:rounded-t-none">
    <h3 className="font-bold dark:text-gray-100 text-gray-900 text-xl">Recent Activity</h3>
    {transactionTests.map((e, i) =><Transaction key={i} wallet={e.wallet} time={e.time} />)}
    </div>
  )
}

export default WalletTransactions