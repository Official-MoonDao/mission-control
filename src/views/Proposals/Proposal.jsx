import ArticleTitle from "../../components/ArticleTitle";
import { authorMappings } from "../../api/proposalsGQL";
import { getHumanTime } from "../../utilities/getHumanTime";

const Proposal = ({ title, loading, startTime, endTime, author, state, idx, proposalId, body }) => {
  const timeStr = state == "pending" ? getHumanTime((startTime - Math.floor(Date.now() / 1000)) * 1000) : state == "active" ? getHumanTime((endTime - Math.floor(Date.now() / 1000)) * 1000) : getHumanTime((Math.floor(Date.now() / 1000) - endTime) * 1000);
  const link = "https://snapshot.org/#/tomoondao.eth/proposal/" + proposalId;

  return (
    <article
      className={`${
        idx === 0 ? "mt-9" : "mt-8"
      } w-[336px] rounded-[15px] border-[0.5px] border-gray-300 bg-white bg-opacity-40 text-gray-100 shadow-md hover:scale-105 dark:bg-transparent dark:shadow-indigo-400 sm:w-[400px] lg:mt-10 lg:w-full dark:lg:bg-black dark:lg:bg-opacity-30 ${
        loading && "loading-component"
      }`}
    >
      <div className="px-[20px] pt-[25px] pb-[19px] lg:px-[30px] lg:pt-[20px]">
        <div className="justify-between lg:flex">
          {/*Title and Started */}
          <div className="max-w-[850px] lg:pr-1 2xl:max-w-[950px]">
            <ArticleTitle text={title} loading={loading} link={link} />
            {/*Body*/}
            <div className="mt-5 2xl:mt-6 hidden lg:block">
              <p className={`text-lg 2xl:text-xl leading-8 2xl:leading-9 text-gray-800 dark:text-gray-100 ${loading && "loading-line"}`}>
                {body.slice(0, 250)}
                <a
                  className={`link text-xl 2xl:text-2xl ${
                    loading && "hidden"
                  }`}
                  href={link}
                  target="_blank"
                >
                  {" ...read more."}
                </a>
              </p>
            </div>

            <p className={`mt-[30px] font-semibold text-emerald-900 dark:text-moon-gold lg:mt-[22px] lg:text-lg ${loading && "loading-line"}`}>
              {
              state == "active" ? 
                (`Voting Ends in ${timeStr}`) : 
              state == "pending" ?
                (`Voting Starts in ${timeStr}`) :
                (`Voting Ended ${timeStr} ago`)
              }
            </p>
          </div>

          {/*Author and status */}
          <div className="mt-[30px] flex items-center justify-between lg:mt-0 lg:flex-col lg:justify-end lg:pl-[10px]">
            <p className={`font-semibold text-black opacity-80 dark:text-gray-100 dark:opacity-100 2xl:text-lg ${loading && "loading-line"}`}>
              {authorMappings[author] ? authorMappings[author] : author.slice(0, 12) + "..."}
            </p>
            <p
              className={`${
                state === "pending" ? "bg-slate-500 text-white " : state === "active" ? "bg-emerald-500" : "bg-purple-600"
              } rounded-xl px-4 py-[4px] text-lg font-semibold capitalize lg:mt-2 lg:px-5 lg:text-xl ${loading && "loading-line"}`}
            >
              {state}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Proposal;
