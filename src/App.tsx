import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Router from "./router/Router";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
