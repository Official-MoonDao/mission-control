import Assets from "./Assets"
import TreasuryBalance from "./TreasuryBalance"

const BalanceAssets = () => {
  return (
    <div className="flex flex-col w-[335px] sm:w-[400px] ">
      <TreasuryBalance />
      <Assets />
    </div>
  )
}

export default BalanceAssets