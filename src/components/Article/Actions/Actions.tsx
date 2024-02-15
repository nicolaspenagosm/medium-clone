import clapsIcon from "./../../../assets/claps.png";
import commentIcon from "./../../../assets/comment.png";
import listenIcon from "./../../../assets/listen.png";
import shareIcon from "./../../../assets/share.png";
import moreIcon from "./../../../assets/more.png";
import saveIcon from "./../../../assets/save.png";

const Actions: React.FC = () => {
  return (
    <div className={styles.rootContainer}>
      <section className={styles.actionsContainer}>
        <button className={styles.action} aria-label="Clap" onClick={() => {}}>
          <img
            src={clapsIcon}
            role="button"
            alt="Clap"
            className={styles.icon}
          />
          <span className={styles.counter}>20</span>
        </button>
        <button
          className={styles.action}
          aria-label="Comment"
          onClick={() => {}}
        >
          <img
            src={commentIcon}
            role="button"
            alt="Comment"
            className={styles.icon}
          />
          <span className={styles.counter}>7</span>
        </button>
      </section>
      <section className={styles.actionsContainer}>
        <button className={styles.action} aria-label="Save" onClick={() => {}}>
          <img src={saveIcon} alt="Save" className={styles.icon} />
        </button>
        <button
          className={styles.action}
          aria-label="Listen"
          onClick={() => {}}
        >
          <img src={listenIcon} alt="Listen" className={styles.icon} />
        </button>
        <button className={styles.action} aria-label="Share" onClick={() => {}}>
          <img src={shareIcon} alt="Share" className={styles.icon} />
        </button>
        <button className={styles.action} onClick={() => {}}>
          <img
            src={moreIcon}
            aria-label="More"
            alt="More"
            className={styles.icon}
          />
        </button>
      </section>
    </div>
  );
};

const styles = {
  icon: "w-6",
  rootContainer: "w-full flex justify-between py-1.5",
  actionsContainer: "flex ",
  action:
    "flex min-w-12 justify-end  items-center text-sm gap-2 text-slate-600 opacity-70 hover:opacity-100",
  counter: "w-8",
};
export default Actions;
