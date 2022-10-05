import React from "react";
import ArticleTitle from "../../components/ArticleTitle";
import { authorMappings } from "../../api/Proposals";

const Proposal = ({ title, loading, endTime, author, state, idx, proposalId }) => {
  const age = Math.round((Date.now() / 1000 - endTime) / 86400);

  const active = state === "closed" ? false : true;

  const link = "https://snapshot.org/#/tomoondao.eth/proposal/" + proposalId;

  return (
    <article
      className={`${
        idx === 0 ? "mt-[35px]" : "mt-[30px]"
      } w-[336px] rounded-[15px] border-[0.5px] border-gray-300 bg-white text-gray-100 shadow-lg duration-300 hover:scale-105 dark:bg-transparent dark:shadow-sky-700 sm:w-[400px] xl:w-full ${
        loading && "loading-component"
      }`}
    >
      <div className="px-[20px] pt-[25px] pb-[19px] xl:px-[30px] xl:pt-[20px]">
        <div className="justify-between xl:flex">
          {/*Title and executed */}
          <div className="max-w-[850px]">
            <ArticleTitle text={title} loading={loading} link={link} />

            <p className={`mt-[30px] font-semibold text-moon-gold xl:mt-[10px] ${loading && "loading-line"}`}>Executed {age} days ago</p>
          </div>

          {/*Author and status */}
          <div className="mt-[30px] flex items-center justify-between xl:mt-0 xl:flex-col xl:justify-end xl:pt-[5px] xl:pl-[10px]">
            <p className={`font-semibold text-black opacity-60 dark:text-gray-100 dark:opacity-100 ${loading && "loading-line"}`}>{authorMappings[author]}</p>
            <p className={`${active ? "bg-moon-blue" : "bg-red-500"} rounded-full px-[16px] py-[4px] font-semibold xl:mt-[5px] ${loading && "loading-line"}`}>
              {active ? "Active" : "Closed"}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Proposal;
