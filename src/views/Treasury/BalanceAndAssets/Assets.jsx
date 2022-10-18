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
      
    </section>
  );
};

export default Assets;
