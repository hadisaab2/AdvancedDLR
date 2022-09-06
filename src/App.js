import "./App.css";
import Addsource from "./Pages/Addsource";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CDRsearch from "./Pages/CDRsearch";
import "./css/main.css";
import Header from "./components/Header";
import Statistics from "./Pages/Statistics";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/sources" element={<Addsource />} />
            <Route path="/searchcdr" element={<CDRsearch />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
