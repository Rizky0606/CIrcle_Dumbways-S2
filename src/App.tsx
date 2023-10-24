import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import DetailThread from "./pages/detailThreads";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-thread/:id" element={<DetailThread />} />
      </Routes>
    </>
  );
};

export default App;
