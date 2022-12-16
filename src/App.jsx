import Category from "./components/Category";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="flex justify-center items-center flex-col">
        <Navbar />
        <Hero />
        <Search />
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/search/:search" element={<SearchResults />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
