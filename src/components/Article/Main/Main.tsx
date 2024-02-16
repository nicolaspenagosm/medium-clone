import DOMPurify from "dompurify";
import Figure from "../Figure";
import { TArticle } from "../../../resources/article";
import Divider from "../Divider";
import Section from "../Section";
import "./main.scss";
import "./../article.scss";

const Main: React.FC<{ article: TArticle }> = ({ article }) => {
  return (
    <main className="main">
      <section>
        <Figure {...article.photo} />
        <p
          className="article__text"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(article.mainText),
          }}
        />
        <p
          className="article__text"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(article.secondaryText),
          }}
        />
        <ul>
          {article.techniquesCovered.map((tecnique, index) => (
            <li className="li article__text" key={index}>
              {tecnique}
            </li>
          ))}
        </ul>
        <p
          className="article__text"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(article.tertiaryText),
          }}
        />
      </section>
      <Divider />
      <Section {...article.debouncing} />
      <Divider />
      <Section {...article.throttling} />
      <Divider />
      <Section {...article.memoization} />
    </main>
  );
};

export default Main;
