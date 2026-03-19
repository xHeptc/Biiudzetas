import DashboardLayout from "../components/layout/DashboardLayout";
import BalanceCard from "../components/dashboard/BalanceCard";
import SummaryCards from "../components/dashboard/SummaryCards";
import ExpenseDistributionCard from "../components/dashboard/ExpenseDistributionCard";
import BudgetPlanningCard from "../components/dashboard/BudgetPlanningCard";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import { mockDashboardData } from "../data/mockDashboardData";

function DashboardPage({ setPage }) {
  return (
    <DashboardLayout setPage={setPage}>
      <main className="dashboard-page">
        <section className="dashboard-top">
          <div className="dashboard-balance-wrap">
            <BalanceCard balance={mockDashboardData.balance} />
          </div>

          <SummaryCards
            income={mockDashboardData.income}
            expenses={mockDashboardData.expenses}
          />
        </section>

        <section className="dashboard-middle">
          <ExpenseDistributionCard
            total={mockDashboardData.expenses}
            items={mockDashboardData.expenseDistribution}
          />

          <BudgetPlanningCard items={mockDashboardData.budgetCategories} />
        </section>

        <section className="dashboard-bottom">
          <RecentTransactions items={mockDashboardData.recentTransactions} />
        </section>
      </main>
    </DashboardLayout>
    
  );
}

export default DashboardPage;