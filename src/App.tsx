import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
