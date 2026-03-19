import DashboardLayout from "../components/layout/DashboardLayout";

function GrafikaiPage() {
  return (
    <DashboardLayout>
      <main className="dashboard-page">
        <section className="card page-card">
          <header className="card-header">
            <h1>Grafikai</h1>
            <p className="page-text">Čia vėliau galėsite rodyti mėnesines suvestines ir analizės grafikus.</p>
          </header>
        </section>
      </main>
    </DashboardLayout>
  );
}

export default GrafikaiPage;