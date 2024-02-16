import clapsIcon from "./../../../assets/claps.png";
import commentIcon from "./../../../assets/comment.png";
import listenIcon from "./../../../assets/listen.png";
import shareIcon from "./../../../assets/share.png";
import moreIcon from "./../../../assets/more.png";
import saveIcon from "./../../../assets/save.png";
import "./actions.scss";

const Actions: React.FC = () => {
  return (
    <div className="actions__root">
      <section className="actions__container">
        <button
          className="actions__action"
          aria-label="Clap"
          onClick={() => {}}
        >
          <img
            src={clapsIcon}
            role="button"
            alt="Clap"
            className="actions__action__icon"
          />
          <span className="actions__action__counter">20</span>
        </button>
        <button
          className="actions__action"
          aria-label="Comment"
          onClick={() => {}}
        >
          <img
            src={commentIcon}
            role="button"
            alt="Comment"
            className="actions__action__icon"
          />
          <span className="actions__action__counter">7</span>
        </button>
      </section>
      <section className="actions__container">
        <button
          className="actions__action"
          aria-label="Save"
          onClick={() => {}}
        >
          <img src={saveIcon} alt="Save" className="actions__action__icon" />
        </button>
        <button
          className="actions__action"
          aria-label="Listen"
          onClick={() => {}}
        >
          <img
            src={listenIcon}
            alt="Listen"
            className="actions__action__icon"
          />
        </button>
        <button
          className="actions__action"
          aria-label="Share"
          onClick={() => {}}
        >
          <img src={shareIcon} alt="Share" className="actions__action__icon" />
        </button>
        <button className="actions__action" onClick={() => {}}>
          <img
            src={moreIcon}
            aria-label="More"
            alt="More"
            className="actions__action__icon"
          />
        </button>
      </section>
    </div>
  );
};

export default Actions;
