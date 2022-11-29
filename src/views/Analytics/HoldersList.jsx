import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

// Example items, to simulate fetching from another resources.
function Box({ text, label }) {
  return (
    <div className="flex w-1/3 items-center justify-center">
      <label className="font-bold text-[orange]">{label}</label>
      <h4 className="text-[slategrey]">{text}</h4>
    </div>
  );
}

function Holders({ currentItems }) {
  return (
    <div className="flex h-[80%] w-[95%] flex-col gap-2 font-Montserrat text-[1vw] leading-10 text-slate-800 text-[slategrey]">
      <div className="text-gradient flex gap-12">
        <h3>address</h3>
        <h3>locked Mooney</h3>
        <h3>vMooney</h3>
        <h3>unlock date</h3>
      </div>
      {currentItems &&
        currentItems.map((item) => (
          <div
            className="justify-left component-background flex h-1/6 items-center gap-5 rounded-2xl border-2 px-2"
            key={item.id}
          >
            <h4 className="text-[1vw] text-[orange]">{item.id}</h4>
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

function HoldersList({ holders, itemsPerPage = 10 }) {
  const data = holders.sort((a, b) => b.totalvMooney - a.totalvMooney);
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
    <div className="flex w-full flex-col items-center justify-center">
      <Holders currentItems={currentItems} />
      <ReactPaginate
        breakLabel=""
        breakClassName="absolute hidden w-0"
        nextLabel=">"
        nextClassName=""
        nextLinkClassName="absolute w-[5vw] bg-[orange] rounded-full"
        onPageChange={handlePageClick}
        pageLinkClassName="absolute hidden w-0 z[-10]"
        pageRangeDisplayed={100}
        pageCount={pageCount}
        previousLabel="<"
        previousClassName=""
        previousLinkClassName="absolute w-[5vw] bg-[orange] rounded-full"
        renderOnZeroPageCount={null}
        containerClassName={
          "relative right-3 bottom-2 h-[8vh] my-2 flex justify-center space-x-2 items-center text-center w-full"
        }
      />
    </div>
  );
}

export default HoldersList;
