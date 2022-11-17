import { PageLayout, SectionLayout } from "../../components/Layout";
import Holders from "./Charts/Holders";

function Analytics() {
  return (
    <PageLayout>
      <SectionLayout>
        <div className="lg:flex lg:justify-around">
          <Holders />
          <div className="bg-white">
            <h1>Mooney staked vs total supply</h1>
          </div>
          <div className="bg-white">
            <h1>Total treasury value & composition</h1>
          </div>
        </div>
      </SectionLayout>
    </PageLayout>
  );
}

export default Analytics;
