import { TArticle } from "../../resources/article";
import Footer from "./Footer/Footer";
import Header from "./Header";
import Main from "./Main";

export const Article: React.FC<{ article: TArticle }> = ({ article }) => {
  return (
    <article className={styles.rootContainer}>
      <Header title={article.title} userData={article.userData} />
      <Main article={article} />
      <Footer tags={article.tags} />
    </article>
  );
};

const styles = {
  rootContainer: "max-w-2xl py-12",
  main: "py-12",
  text: "font-serif text-xl mb-9",
  li: "list-disc ml-12",
};
export default Article;
