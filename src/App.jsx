import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Pages/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
