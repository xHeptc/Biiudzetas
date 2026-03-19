import DashboardLayout from "../components/layout/DashboardLayout";

function PiniginePage() {
  return (
    <DashboardLayout>
      <main className="dashboard-page">
        <section className="card page-card">
          <header className="card-header">
            <h1>Piniginė</h1>
            <p className="page-text">Čia vėliau galėsite rodyti pajamas, išlaidas ir operacijų valdymą.</p>
          </header>
        </section>
      </main>
    </DashboardLayout>
  );
}

export default PiniginePage;