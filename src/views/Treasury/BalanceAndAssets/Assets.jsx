import Asset from "./Asset";
import { assetTests } from "../../../test-data/tests";

const Assets = () => {
  return (
    <section>
      <div className="mt-4 h-[1px] w-[335px] bg-black opacity-30 dark:bg-white sm:w-[400px] xl:w-full"></div>
      <h3 className="mt-3 xl:mt-5 text-xl font-bold text-gray-900 dark:text-gray-100">DAO Wallets & Assets</h3>
      <div className="mt-[19px] flex min-h-[500px] w-[335px] flex-col items-center rounded-lg bg-white bg-opacity-60 pt-2 pb-[38px] dark:bg-opacity-[0.05] sm:w-[400px] xl:w-auto 2xl:px-7 2xl:pb-12">
        {assetTests.map((e, i) => (
          <Asset key={i} mooney={e.mooney} dollars={e.dollars} />
        ))}
      </div>
    </section>
  );
};

export default Assets;
