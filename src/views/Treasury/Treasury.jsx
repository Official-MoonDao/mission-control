import Transactions from "./Transactions/Transactions";
import BalanceAssets from "./BalanceAndAssets/BalanceAssets";
import PageLayout from "../../components/Layout/PageLayout";
import { SectionLayout } from "../../components/Layout";
const Treasury = () => {
  return (
    <PageLayout>
      <SectionLayout twoSection>
        <div className="xl:flex xl:justify-around">
          <BalanceAssets />
          <Transactions />
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Treasury;
