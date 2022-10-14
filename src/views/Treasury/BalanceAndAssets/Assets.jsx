import Asset from "./Asset";
import ArticleTitle from "../../../components/ArticleTitle";

const Assets = ({ tokens }) => {
  console.log(tokens)
  return (
    <section className="mt-3 xl:mt-5 flex flex-col">
      <ArticleTitle text={"DAO Assets"} />

      {tokens.map((token, i) => (
        <Asset key={i} name={token.symbol} amount={token.balance.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          usd={token.usd.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/>
      ))}

      <a className="mt-10 text-xl xl:text-[22px] font-semibold underline decoration-amber-600 dark:decoration-moon-gold decoration-2 hover:decoration-[3px] text-slate-800 hover:text-black dark:text-moon-gold dark:hover:text-amber-200" href="https://etherscan.io/address/0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9" target="_blank">View MoonDAO on Etherscan</a>

    </section>
  );
};

export default Assets;
