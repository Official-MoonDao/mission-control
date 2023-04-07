import ArticleTitle from "../../components/ArticleTitle";
import { authorMappings } from "../../api/proposalsGQL";
import { getHumanTime } from "../../utilities/getHumanTime";
import LinkHighlighter from "../../components/LinkHighlighter";

const Proposal = ({
  title,
  loading,
  startTime,
  endTime,
  author,
  state,
  idx,
  proposalId,
  body,
}) => {
  const timeStr =
    state == "pending"
      ? getHumanTime((startTime - Math.floor(Date.now() / 1000)) * 1000)
      : state == "active"
      ? getHumanTime((endTime - Math.floor(Date.now() / 1000)) * 1000)
      : getHumanTime((Math.floor(Date.now() / 1000) - endTime) * 1000);
  const link = "https://snapshot.org/#/tomoondao.eth/proposal/" + proposalId;

  return (
    <article
      className={`${
        idx === 0 ? "mt-9" : "mt-8"
      } relative w-[336px] rounded-2xl border-[0.5px] border-gray-300 font-mono text-gray-100 hover:scale-[1.02] sm:w-[400px] lg:mt-10 lg:w-full lg:max-w-[1080px] ${
        loading && "loading-component"
      }`}
    >
      <div className="blur-background rounded-2xl"></div>

      <div className="component-background rounded-2xl px-5 py-6 lg:px-8 xl:px-9 xl:py-7">
        <div className="justify-between lg:flex">
          {/*Title and Started */}
          <div className="max-w-[850px] lg:pr-1 2xl:max-w-[950px]">
            <ArticleTitle text={title} loading={loading} link={link} />
            {/*Body*/}
            <div className="mt-4 lg:mt-5 2xl:mt-6">
              <p
                className={`break-all leading-8 text-gray-700 dark:text-gray-100 lg:text-lg 2xl:text-xl 2xl:leading-9 ${
                  loading && "loading-line"
                }`}
              >
                <LinkHighlighter
                  text={body.slice(0, 250) + "..."}
                  label={"Proposal Link"}
                />
                <a
                  className={`link text-lg lg:text-xl ${loading && "hidden"}`}
                  href={link}
                  target="_blank"
                >
                  {"read more."}
                </a>
              </p>
            </div>
            {/*Author and status */}

            <p
              className={`mt-6 font-semibold text-blue-950 dark:text-moon-gold lg:mt-[22px] lg:text-lg ${
                loading && "loading-line"
              }`}
            >
              {state == "active"
                ? `Voting Ends in ${timeStr}`
                : state == "pending"
                ? `Voting Starts in ${timeStr}`
                : `Voting Ended ${timeStr} ago`}
            </p>
          </div>
          <div className="mt-7 flex items-center justify-between lg:mt-0 lg:flex-col lg:justify-end">
            <p
              className={`font-semibold text-blue-950  dark:text-gray-200  2xl:text-lg ${
                loading && "loading-line"
              }`}
            >
              {authorMappings[author]
                ? authorMappings[author]
                : author.slice(0, 12) + "..."}
            </p>
            <p
              className={`${
                state === "pending"
                  ? "bg-slate-500 text-white "
                  : state === "active"
                  ? "bg-amber-500"
                  : "bg-slate-600"
              } rounded-xl px-4 py-[4px] text-lg font-semibold capitalize lg:mt-2 lg:px-5 ${
                loading && "loading-line"
              }`}
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
