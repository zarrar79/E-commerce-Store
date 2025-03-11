import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import NavBar from "./Components/NavBar"; // Ensure NavBar is added for navigation

function App() {
  return (
    <>
       {/* Common Navigation Bar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
