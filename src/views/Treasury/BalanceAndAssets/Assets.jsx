import Asset from "./Asset";
import { assetTests } from "../../../test-data/tests";

const Assets = () => {
  return (
    <section>
      <div className="mt-[34px] h-[1px] w-[335px] bg-black opacity-30 dark:bg-white sm:w-[400px] xl:w-full"></div>
      <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-gray-100">DAO Wallets & Assets</h3>
      <div className="mt-[19px] flex min-h-[500px] w-[335px] flex-col items-center rounded-lg bg-white bg-opacity-60 py-6 dark:bg-opacity-[0.04] sm:w-[400px]">
        {assetTests.map((e, i) => (
          <Asset key={i} mooney={e.mooney} dollars={e.dollars} />
        ))}
      </div>
    </section>
  );
};

export default Assets;
