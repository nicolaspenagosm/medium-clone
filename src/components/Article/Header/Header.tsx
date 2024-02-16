import { TUserData } from "../../../resources/article";
import Actions from "../Actions";
import "./header.scss";

export const Article: React.FC<{
  title: string;
  userData: TUserData;
}> = ({ title, userData }) => {
  return (
    <header className="header">
      <h1 className="article__title">{title}</h1>
      <section className="header__user-data">
        <div className="header__user-data__images-container">
          <a
            href={userData.profileLink}
            aria-label={`${userData.name}'s profile`}
          >
            <img
              src={userData.userImageUrl}
              className="header__user-data__user-image"
              alt={`${userData.name}'s profile picture`}
              draggable={false}
            />
          </a>
          <a
            href={userData.companyProfileLink}
            aria-label={`${userData.publishedBy}'s profile`}
          >
            <img
              src={userData.companyImageUrl}
              className="header__user-data__company-image"
              alt={`${userData.publishedBy}'s profile picture`}
              draggable={false}
            />
          </a>
        </div>
        <div>
          <p>
            <a
              href={userData.profileLink}
              className="article__text--hover-underline"
            >
              {userData.name}
            </a>
            <span
              className="header__user-data__dot-separator"
              aria-hidden="true"
            >
              ·
            </span>
            <button className="header__user-data__follow">Follow</button>
          </p>
          <p className="article__text article__text--caption article__text--sans ">
            Published in{" "}
            <a
              href={userData.companyProfileLink}
              className="article__text--hover-underline"
            >
              {userData.publishedBy}
            </a>
            <span
              className="header__user-data__dot-separator"
              aria-hidden="true"
            >
              ·
            </span>
            {userData.created}
            <span
              className="header__user-data__dot-separator"
              aria-hidden="true"
            >
              ·
            </span>
            {userData.length}
          </p>
        </div>
      </section>
      <hr className="header__user-data__separator" />
      <Actions />
      <hr className="header__user-data__separator" />
    </header>
  );
};

export default Article;
