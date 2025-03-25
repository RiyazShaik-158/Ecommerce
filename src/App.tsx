import Layout from "./layout/Layout";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Layout />
      </div>
    </QueryClientProvider>
  );
};

export default App;
