import "./figure.scss";

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
    <figure className="figure">
      <img
        src={imageUrl}
        alt="Laptop showing a snnpet of code"
        className="figure__img"
      />
      <figcaption className="article__text article__text--caption figure__caption">
        Photo by{" "}
        <a href={photographerUrl} className="figure__caption--link">
          {photoCredit}
        </a>
        {" "}on{" "}
        <a href={photoSourceUrl} className="figure__caption--link">
          {photoSource}
        </a>
      </figcaption>
    </figure>
  );
};


export default Figure;
