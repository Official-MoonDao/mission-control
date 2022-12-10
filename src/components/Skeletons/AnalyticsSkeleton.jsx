import { SectionLayout, PageLayout, Line } from "../Layout";
import Header from "../Header";
const AnalyticsSkeleton = () => {
  return (
    <PageLayout>
      <SectionLayout>
        <div className="">
          <Header text={"Analytics"} />
          <Line />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="loading-component mt-10 h-[700px] w-[80vw] rounded-2xl animate-pulse"></div>
          <div className="loading-component mt-10 h-[700px] w-[80vw] rounded-2xl animate-pulse"></div>
          <div className="loading-component mt-10 h-[700px] w-[80vw] rounded-2xl animate-pulse"></div>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default AnalyticsSkeleton;
