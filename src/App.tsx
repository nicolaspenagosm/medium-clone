import Article from "./components/Article";
import { article } from "./resources/article";

function App() {
  return (
    <main className={styles.main}>
      <Article article={article} />
    </main>
  );
}

const styles = {
  main: "flex flex-col items-center",
};
export default App;
