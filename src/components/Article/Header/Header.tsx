import { TUserData } from "../../../resources/article";
import Actions from "../Actions";

export const Article: React.FC<{
  title: string;
  userData: TUserData;
}> = ({ title, userData }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <section className={styles.userData}>
        <div className={styles.imagesContainer}>
          <a
            href={userData.profileLink}
            aria-label={`${userData.name}'s profile`}
          >
            <img
              src={userData.userImageUrl}
              className={styles.userImage}
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
              className={styles.companyImage}
              alt={`${userData.publishedBy}'s profile picture`}
              draggable={false}
            />
          </a>
        </div>
        <div>
          <p>
            <a href={userData.profileLink} className={styles.hoverUnderline}>
              {userData.name}
            </a>
            <span className={styles.dotSeparator} aria-hidden="true">
              ·
            </span>
            <button className={styles.followBtn}>Follow</button>
          </p>
          <p className={styles.publishedInfo}>
            Published in{" "}
            <a
              href={userData.companyProfileLink}
              className={styles.hoverUnderline}
            >
              {userData.publishedBy}
            </a>
            <span className={styles.dotSeparator} aria-hidden="true">
              ·
            </span>
            {userData.created}
            <span className={styles.dotSeparator} aria-hidden="true">
              ·
            </span>
            {userData.length}
          </p>
        </div>
      </section>
      <hr className={styles.separator} />
      <Actions />
      <hr className={styles.separator} />
    </header>
  );
};

const styles = {
  title: `text-[40px] leading-[45px] font-bold text-slate-900`,
  header: "flex flex-col items-start",
  userData: "flex justify-start py-8 gap-5",
  imagesContainer: "relative",
  userImage: "w-11",
  companyImage: "w-[21px] absolute top-4 right-[-10px]",
  hoverUnderline:
    "hover:underline hover:underline-offset-3 cursor-pointer text-slate-900",
  publishedInfo: "text-slate-500 text-sm",
  dotSeparator: "px-2 text-sm",
  followBtn: "text-green-600",
  separator: "border-t-[1px] border-slate-200 divide-solid w-full",
};

export default Article;
