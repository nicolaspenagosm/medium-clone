const Figure: React.FC<{
  photographerUrl: string;
  photoCredit: string;
  photoSource: string;
  photoSourceUrl: string;
  imageUrl: string;
}> = ({
  photographerUrl,
  photoCredit,
  photoSource,
  photoSourceUrl,
  imageUrl,
}) => {
  return (
    <figure className={styles.rootContainer}>
      <img
        src={imageUrl}
        alt="Laptop showing a snnpet of code"
        className={styles.img}
      />
      <figcaption className={styles.caption}>
        Photo by{" "}
        <a href={photographerUrl} className={styles.link}>
          {photoCredit}
        </a>
        on{" "}
        <a href={photoSourceUrl} className={styles.link}>
          {photoSource}
        </a>
      </figcaption>
    </figure>
  );
};

const styles = {
  rootContainer: "pb-12",
  img: "pb-1.5",
  caption: "text-sm text-center text-slate-500",
  link: "underline underline-offset-3",
};

export default Figure;
