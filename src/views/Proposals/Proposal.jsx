import React from "react";
import ArticleTitle from "../../components/ArticleTitle";

const Proposal = ({ title, executionDays, author, active, idx }) => {
  return (
    <article className={`${idx === 0 ? "mt-[35px]" : "mt-[30px]"} bg-white dark:bg-transparent text-gray-100 border-[0.5px] border-gray-300 rounded-[15px] w-[336px]`}>
      <div className="pt-[25px] pb-[19px] px-[20px]">
        <ArticleTitle text={title} />

        <p className="text-moon-gold font-semibold mt-[30px]">Executing {executionDays} days ago</p>

        <div className="mt-[30px] flex justify-between items-center">
          <p className="font-semibold text-black opacity-60 dark:opacity-100 dark:text-gray-100">{author}</p>
          <p className={`${active ? "bg-moon-blue" : "bg-red-500"} rounded-full px-[16px] py-[4px] font-semibold`}>{active ? "Active" : "Paused"}</p>
        </div>
      </div>
    </article>
  );
};

export default Proposal;
