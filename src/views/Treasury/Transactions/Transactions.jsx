import TransactionSkeletons from "../../../components/Skeletons/TransactionSkeletons";
import Transaction from "./Transaction";
import TransactionCaret from "./TransactionCaret";
import { PaginationContainer, Line } from "../../../components/Layout";
import Header from "../../../components/Header";
import { errorToast } from "../../../utilities/errorToast";
import { useTransactions } from "../../../api/useTransactions";
import TransactionPagination from "./TransactionPagination";
import { allowedAssets } from "../../../utilities/allowedAssets";

import { useState } from "react";

const WalletTransactions = () => {
  const [page, setPage] = useState(1);
  const pageMax = 697;
  const { transactions, isLoaded, error } = useTransactions(page);

  if (error)
    errorToast(
      "Connection with Etherscan failed. Contact MoonDAO if the problem persists 🚀"
    );

  return (
    <section className="mt-12 xl:mt-2 xl:w-[40%] xl:max-w-[700px]">
      <div className="flex flex-row items-center justify-between">
        <Header text="Transactions" noStar />
      </div>

      <Line />

      <div className="mt-10">
        {!isLoaded || error ? (
          <TransactionSkeletons />
        ) : (
          transactions.filter((transaction) => allowedAssets[transaction.tokenSymbol]).map((e, i) => <Transaction key={i} data={e} />)
        )}
      </div>

      <PaginationContainer>
        <TransactionCaret
          left
          page={page}
          pageMax={pageMax}
          setPage={setPage}
          isLoaded={isLoaded}
        />
        {page <= 3
          ? [1, 2, 3, 4, 5].map((e, i) => (
              <TransactionPagination
                key={i}
                currentPage={page}
                pageNumber={e}
                setPage={setPage}
                pageMax={pageMax}
                isLoaded={isLoaded}
              />
            ))
          : page >= pageMax - 2
          ? [pageMax - 4, pageMax - 3, pageMax - 2, pageMax - 1, pageMax].map(
              (e, i) => (
                <TransactionPagination
                  key={i}
                  currentPage={page}
                  pageNumber={e}
                  setPage={setPage}
                  pageMax={pageMax}
                  isLoaded={isLoaded}
                />
              )
            )
          : [page - 2, page - 1, page, page + 1, page + 2].map((e, i) => (
              <TransactionPagination
                key={i}
                currentPage={page}
                pageNumber={e}
                setPage={setPage}
                pageMax={pageMax}
                isLoaded={isLoaded}
              />
            ))}
        <TransactionCaret
          page={page}
          pageMax={pageMax}
          setPage={setPage}
          isLoaded={isLoaded}
        />
      </PaginationContainer>
    </section>
  );
};

export default WalletTransactions;
