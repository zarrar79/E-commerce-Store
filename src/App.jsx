import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar"; // Ensure NavBar is added for navigation

function App() {
  return (
    <>
       {/* Common Navigation Bar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
