import Assets from "./Assets"
import TreasuryBalance from "./TreasuryBalance"

const BalanceAssets = () => {
  return (
    <div className="flex flex-col w-[335px] sm:w-[400px] xl:w-[460px] 2xl:w-[620px] 2xl:relative 2xl:right-6">
      <TreasuryBalance />
      <Assets />
    </div>
  )
}

export default BalanceAssets