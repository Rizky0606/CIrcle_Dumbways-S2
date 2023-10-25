import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DetailThreads from "./components/layouts/DetailThread/DetailThread";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-thread/:id" element={<DetailThreads />} />
      </Routes>
    </>
  );
};

export default App;
