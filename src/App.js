import { QueryClient, QueryClientProvider } from "react-query";
import Example from "./ReactQuery/Example";
import QuickStart from "./ReactQuery/QuickStart";
import Pagination from "./ReactQuery/Pagination";
import InfiniteScroll from "./ReactQuery/InfiniteScroll";

const queryClinet = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClinet}>
        <Example></Example>
        <QuickStart></QuickStart>
        <Pagination></Pagination>
        <InfiniteScroll></InfiniteScroll>
      </QueryClientProvider>
    </div>
  );
}

export default App;
