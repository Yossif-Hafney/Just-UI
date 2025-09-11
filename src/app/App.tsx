import "../styles/App.css";
import "../assets/fonts/facebook-fonts.css";
import "../assets/index"; // Import all assets
import Login from "../pages/auth/Login";
import Register from "@/pages/auth/Register";
import Home from "@/pages/home/Home";
import { Routes, Route } from "react-router-dom";

// Main App Component
// This is the root component of the Facebook UI application

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
export default App;
