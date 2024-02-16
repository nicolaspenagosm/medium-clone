import Actions from "../Actions";
import "./footer.scss";

const Footer: React.FC<{ tags: { tag: string; url: string }[] }> = ({
  tags,
}) => {
  return (
    <footer>
      <nav aria-label="Related topics">
        <ul className="tag-list">
          {tags.map((tag, index) => (
            <li key={index} className="tag-list__tag">
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

export default Footer;
