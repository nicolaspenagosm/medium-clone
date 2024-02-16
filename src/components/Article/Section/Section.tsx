import Code from "../Code";
import DOMPurify from "dompurify";
import "../../Article/article.scss";

const Section: React.FC<{
  title: string;
  description: string;
  code: string;
}> = ({ title, description, code }) => {
  return (
    <section className={styles.root}>
      <h2 className="article__title article__title--subtitle">{title}</h2>
      <p
        className={styles.text}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(description),
        }}
      />
      <Code codeSnppet={code} ariaLabel={`${title} implementation example`} />
    </section>
  );
};

const styles = {
  root: "mb-9",
  text: "font-serif text-xl mb-9",
  subtitle: "text-2xl mb-9  font-bold",
};
export default Section;
