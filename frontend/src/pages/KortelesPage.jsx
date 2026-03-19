import DashboardLayout from "../components/layout/DashboardLayout";

function KortelesPage() {
  return (
    <DashboardLayout>
      <main className="dashboard-page">
        <section className="card page-card">
          <header className="card-header">
            <h1>Kortelės</h1>
            <p className="page-text">Čia vėliau galėsite rodyti mokėjimo kortelių informaciją arba susietas paskyras.</p>
          </header>
        </section>
      </main>
    </DashboardLayout>
  );
}

export default KortelesPage;