import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Importing components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MyFlashCards from "./components/myflashcards/MyFlashCards";
import ViewCard from "./components/myflashcards/ViewCard";
import FormValidation from "./components/flashcard/FormValidation";

function App() {
  const flashcardstate = useSelector((state) => state.Reducer.showNum);
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Navbar />
        <div className="px-0 lg:px-40 sm:px-8">
          <Header />
          <Routes>
            <Route path="/" element={<FormValidation />} />
            <Route path="/myflashcards" element={<MyFlashCards />} />
            <Route path={`/flashCard${flashcardstate}`} element={<ViewCard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;