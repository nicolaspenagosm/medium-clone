import Actions from "../Actions";

const Footer: React.FC<{ tags: { tag: string; url: string }[] }> = ({
  tags,
}) => {
  return (
    <footer>
      <nav aria-label="Related topics">
        <ul className={styles.tagsList}>
          {tags.map((tag, index) => (
            <li key={index} className={styles.tag}>
              <a href={tag.url} aria-label={`Read more about ${tag.tag}`}>
                {tag.tag}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Actions />
    </footer>
  );
};
const styles = {
  tag: "bg-[#F9F9F9] px-5 py-2 rounded-3xl text-sm",
  tagsList: "flex gap-3 flex-wrap mb-9",
};
export default Footer;
