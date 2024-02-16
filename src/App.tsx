import Article from "./components/Article";
import { article } from "./resources/article";
import "./app.scss";
function App() {
  return (
    <main className="app-root">
      <Article article={article} />
    </main>
  );
}


export default App;
