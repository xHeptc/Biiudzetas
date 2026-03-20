import authStore from "../../stores/authStore";

function Topbar() {
  const { logout } = authStore()

  return (
    <header className="topbar">
      <div />
      <button className="logout-btn" type="button" onClick={logout}>
        Atsijungti
      </button>
    </header>
  );
}

export default Topbar;