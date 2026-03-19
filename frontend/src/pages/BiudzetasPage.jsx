import DashboardLayout from "../components/layout/DashboardLayout";

function BiudzetasPage() {
  return (
    <DashboardLayout>
      <main className="dashboard-page">
        <section className="card page-card">
          <header className="card-header">
            <h1>Biudžetas</h1>
            <p className="page-text">Čia vėliau galėsite valdyti kategorijų limitus ir biudžeto planavimą.</p>
          </header>
        </section>
      </main>
    </DashboardLayout>
  );
}

export default BiudzetasPage;