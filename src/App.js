import Routes from "./routes";

import GlobalStyle from "./styles/global";

import Header from "./components/Header";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
