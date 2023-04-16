import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar.comp";
import Home from "./routes/home/home.comp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
