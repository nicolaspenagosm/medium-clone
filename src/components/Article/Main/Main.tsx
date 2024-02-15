import DOMPurify from "dompurify";
import Figure from "../Figure";
import { TArticle } from "../../../resources/article";
import Divider from "../Divider";
import Section from "../Section";

const Main: React.FC<{ article: TArticle }> = ({ article }) => {
  return (
    <main className={styles.main}>
      <section>
        <Figure {...article.photo} />
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(article.mainText),
          }}
        />
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(article.secondaryText),
          }}
        />
        <ul>
          {article.techniquesCovered.map((tecnique, index) => (
            <li className={`${styles.li} ${styles.text}`} key={index}>
              {tecnique}
            </li>
          ))}
        </ul>
        <p
          className={styles.text}
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

const styles = {
  main: "py-12",
  text: "font-serif text-xl mb-9",
  li: "list-disc ml-12",
  subtitle: "text-2xl mb-9  font-bold",
};

export default Main;
