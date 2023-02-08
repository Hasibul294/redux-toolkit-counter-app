import "./App.css";
import CounterView from "./features/counter/CounterView";
import PostsView from "./features/posts/PostsView";

function App() {
  return (
    <div className="App">
      <h1>Counter App with redux toolkit</h1>
      <CounterView></CounterView>
      <PostsView></PostsView>
    </div>
  );
}

export default App;
