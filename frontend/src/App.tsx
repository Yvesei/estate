import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Properties from "./pages/Properties";
import PropertyFormPage from "./pages/PropertyFormPage";
import PropertyDetail from "./pages/PropertyDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/property/details/:id" element={<PropertyDetail />} />
        <Route path="/property/:id" element={<PropertyFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;