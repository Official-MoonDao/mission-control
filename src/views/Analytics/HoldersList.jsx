import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

// Example items, to simulate fetching from another resources.
function Box({ text }) {
  return (
    <div className="justify-left flex w-1/3 items-center">
      <h4 className="text-[slategrey]">{text}</h4>
    </div>
  );
}

function Holders({ currentItems }) {
  return (
    <div className="relative flex h-[100%] w-[100%] flex-col gap-2 font-Montserrat text-[1.25vw] leading-10 text-slate-800 text-[slategrey] lg:right-6 lg:w-[140%]">
      <div className="text-gradient flex w-full gap-[15%] lg:gap-[2vw]">
        <h3>address</h3>
        <h3>locked Mooney</h3>
        <h3>vMooney</h3>
        <h3>unlock date</h3>
      </div>
      {currentItems &&
        currentItems.map((item) => (
          <div
            className="justify-left component-background flex w-full items-center gap-[10%] rounded-2xl border-2 px-2 hover:scale-[1.05] hover:border-4"
            key={item.id}
            onClick={() =>
              window.open(`https://etherscan.io/address/${item.address}`)
            }
          >
            <h4 className="px-0.5text-[1.25vw] text-gradient">{item.id}</h4>
            <div className="flex w-full gap-1">
              <Box
                text={Math.round(item.totalLocked).toLocaleString("en-US")}
              />
              <Box
                text={Math.round(item.totalvMooney).toLocaleString("en-US")}
              />
              <Box text={item.locktime} />
            </div>
          </div>
        ))}
    </div>
  );
}

function HoldersList({ data, itemsPerPage = 10 }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex w-[60vw] flex-col items-center justify-center lg:w-[25vw]">
      <Holders currentItems={currentItems} />
      <ReactPaginate
        breakLabel=""
        breakClassName="absolute hidden w-0"
        nextLabel=">"
        nextClassName="relative bottom-4 flex justify-center"
        nextLinkClassName="fancy-btn"
        onPageChange={handlePageClick}
        pageLinkClassName="absolute hidden w-0 z[-10]"
        pageRangeDisplayed={100}
        pageCount={pageCount}
        previousLabel="<"
        previousClassName="relative bottom-4 flex justify-center"
        previousLinkClassName={"fancy-btn"}
        renderOnZeroPageCount={null}
        containerClassName={
          "h-[8vh] relative lg:right-6 my-4 flex justify-center space-x-1 lg:space-x-2 items-center text-center w-full select-none"
        }
      />
    </div>
  );
}

export default HoldersList;
