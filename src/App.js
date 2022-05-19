import "./App.css";
import Addsource from "./Pages/Addsource";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CDRsearch from "./Pages/CDRsearch";
import "./css/main.css";
import Header from "./components/Header";
import Statistics from "./Pages/Statistics";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="maindiv">
          <Header />
          <Routes>
            <Route path="/sources" element={<Addsource />} />
            <Route path="/searchcdr" element={<CDRsearch />} />
            <Route path="/statistics" element={<Statistics />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
