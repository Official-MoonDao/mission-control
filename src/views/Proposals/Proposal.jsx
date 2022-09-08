import React from "react";
import ArticleTitle from "../../components/ArticleTitle";
import { authorMappings } from "../../test-data/tests";

const Proposal = ({ title, startTime, endTime, author, state, idx, proposalId }) => {
  var age = Math.round((Date.now()/1000 - endTime) / 86400);

  var active = true;
  if (state == "closed") active = false;

  var link = "https://snapshot.org/#/tomoondao.eth/proposal/" + proposalId;
  console.log(link);

  return (
    <article className={`${idx === 0 ? "mt-[35px]" : "mt-[30px]"} bg-white dark:bg-transparent text-gray-100 border-[0.5px] border-gray-300 rounded-[15px] w-[336px]`}>
      <div className="pt-[25px] pb-[19px] px-[20px]">
        <ArticleTitle text={title} />

        <p className="text-moon-gold font-semibold mt-[30px]">Executed {age} days ago</p>

        <div className="mt-[30px] flex justify-between items-center">
          <p className="font-semibold text-black opacity-60 dark:opacity-100 dark:text-gray-100">{authorMappings[author]}</p>
          <p className={`${active ? "bg-moon-blue" : "bg-red-500"} rounded-full px-[16px] py-[4px] font-semibold`}>{active ? "Active" : "Paused"}</p>
        </div>
      </div>
    </article>
  );
};

export default Proposal;
