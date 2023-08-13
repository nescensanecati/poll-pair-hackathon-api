import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import ResultsPage from "./pages/ResultsPage/ResultsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./pages/Header/Header";
import CreatePoll from "./pages/CreatePoll/CreatePoll";
import VotePage from "./pages/VotePage/VotePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/create-poll" element={<CreatePoll />} />
          <Route path="/vote" element={<VotePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
