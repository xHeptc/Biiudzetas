import { Routes, Route } from "react-router";
import { useState } from 'react'
import DashboardPage from "./pages/Dashboardpage";
import PiniginePage from "./pages/PiniginePage";
import GrafikaiPage from "./pages/GrafikaiPage";
import BiudzetasPage from "./pages/BiudzetasPage";
import KortelesPage from "./pages/KortelesPage";
import { Registration } from './components/Registration'

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/pinigine" element={<PiniginePage />} />
      <Route path="/grafikai" element={<GrafikaiPage />} />
      <Route path="/biudzetas" element={<BiudzetasPage />} />
      <Route path="/korteles" element={<KortelesPage />} />
      <Route path="/registracija" element={<Registration/>} />
    </Routes>
  );
}

export default App;