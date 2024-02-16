import { TArticle } from "../../resources/article";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Main from "./Main";
import "./article.scss";

export const Article: React.FC<{ article: TArticle }> = ({ article }) => {
  return (
    <article className="article">
      <Header title={article.title} userData={article.userData} />
      <Main article={article} />
      <Footer tags={article.tags} />
    </article>
  );
};

export default Article;
