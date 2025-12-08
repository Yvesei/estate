import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Properties from "./pages/Properties";
import PropertyFormPage from "./pages/PropertyFormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/property/:id" element={<PropertyFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;