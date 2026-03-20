import { Routes, Route, Navigate } from "react-router";
import DashboardPage from "./pages/Dashboardpage";
import PiniginePage from "./pages/PiniginePage";
import GrafikaiPage from "./pages/GrafikaiPage";
import BiudzetasPage from "./pages/BiudzetasPage";
import KortelesPage from "./pages/KortelesPage";
import { Registration } from './components/Registration'
import { Login } from './components/Login'
import authStore from "./stores/authStore";
import { useEffect } from "react";

function App() {
  const { user, check, loading } = authStore();

  useEffect(() => {
    check()
  }, [])

  if (loading) {
    return <h1>LOADING</h1>
  }

  return (
    <Routes>

      {/* 🔓 PUBLIC ROUTES */}
      <Route
        path="/registracija"
        element={!user ? <Registration /> : <Navigate to="/" />}
      />
      <Route
        path="/prisijungti"
        element={!user ? <Login /> : <Navigate to="/" />}
      />

      {/* 🔐 PROTECTED ROUTES */}
      <Route
        path="/"
        element={user ? <DashboardPage /> : <Navigate to="/prisijungti" />}
      />
      <Route
        path="/pinigine"
        element={user ? <PiniginePage /> : <Navigate to="/prisijungti" />}
      />
      <Route
        path="/grafikai"
        element={user ? <GrafikaiPage /> : <Navigate to="/prisijungti" />}
      />
      <Route
        path="/biudzetas"
        element={user ? <BiudzetasPage /> : <Navigate to="/prisijungti" />}
      />
      <Route
        path="/korteles"
        element={user ? <KortelesPage /> : <Navigate to="/prisijungti" />}
      />

      {/* 🔁 FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}

export default App;