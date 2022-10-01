import Transaction from "./Transaction"
import {transactionTests} from "../../../test-data/tests"

const WalletTransactions = () => {
  return (
    <div className="mt-4">
    <h3 className="font-bold dark:text-gray-100 text-gray-900 text-xl">Recent Activity</h3>
    {transactionTests.map((e, i) =><Transaction key={i} wallet={e.wallet} time={e.time} />)}
    </div>
  )
}

export default WalletTransactions