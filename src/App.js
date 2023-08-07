import { QueryClient, QueryClientProvider } from "react-query";
import Example from "./ReactQuery/Example";
import QuickStart from "./ReactQuery/QuickStart";

const queryClinet = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClinet}>
        <Example></Example>
        <QuickStart></QuickStart>
      </QueryClientProvider>
    </div>
  );
}

export default App;
