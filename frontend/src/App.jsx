import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/Dashboardpage";
import PiniginePage from "./pages/PiniginePage";
import GrafikaiPage from "./pages/GrafikaiPage";
import BiudzetasPage from "./pages/BiudzetasPage";
import KortelesPage from "./pages/KortelesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/pinigine" element={<PiniginePage />} />
      <Route path="/grafikai" element={<GrafikaiPage />} />
      <Route path="/biudzetas" element={<BiudzetasPage />} />
      <Route path="/korteles" element={<KortelesPage />} />
    </Routes>
  );
}

export default App;