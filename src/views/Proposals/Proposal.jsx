import React from "react";
import ArticleTitle from "../../components/ArticleTitle";
import { authorMappings } from "../../test-data/tests";

const Proposal = ({ title, startTime, endTime, author, state, idx, proposalId }) => {
  var age = Math.round((Date.now() / 1000 - endTime) / 86400);

  var active = true;
  if (state == "closed") active = false;

  var link = "https://snapshot.org/#/tomoondao.eth/proposal/" + proposalId;

  return (
    <article
      className={`${
        idx === 0 ? "mt-[35px]" : "mt-[30px]"
      } w-[336px] rounded-[15px] border-[0.5px] shadow-lg dark:shadow-indigo-500  border-gray-300 bg-white text-gray-100 duration-300 hover:scale-105 dark:bg-transparent sm:w-[400px] xl:w-full`}
    >
      <div className="px-[20px] pt-[25px] pb-[19px] xl:px-[30px] xl:pt-[20px]">
        <div className="justify-between xl:flex">
          {/*Title and executed */}
          <div className="max-w-[850px]">
            <a target="_blank" href={link} className="underline decoration-moon-gold decoration-1 duration-200 hover:decoration-2">
              <ArticleTitle text={title} />
            </a>

            <p className="mt-[30px] font-semibold text-moon-gold xl:mt-[10px]">Executed {age} days ago</p>
          </div>

          {/*Author and status */}
          <div className="mt-[30px] flex items-center justify-between xl:mt-0 xl:flex-col xl:justify-end xl:pt-[5px] xl:pl-[10px]">
            <p className="font-semibold text-black opacity-60 dark:text-gray-100 dark:opacity-100">{authorMappings[author]}</p>
            <p className={`${active ? "bg-moon-blue" : "bg-red-500"} rounded-full px-[16px] py-[4px] font-semibold xl:mt-[5px]`}>{active ? "Active" : "Closed"}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Proposal;
