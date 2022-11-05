import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Landing from "./pages/Landing/Landing";
import Contact from "./pages/contact/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="px-4 md:px-28 w-full">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
