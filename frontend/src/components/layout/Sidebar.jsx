import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">$</div>
        <span>Biiudžetas+</span>
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Apžvalga
        </NavLink>

        <NavLink
          to="/pinigine"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Piniginė
        </NavLink>

        <NavLink
          to="/grafikai"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Grafikai
        </NavLink>

        <NavLink
          to="/biudzetas"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Biudžetas
        </NavLink>

        <NavLink
          to="/korteles"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Kortelės
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-link sidebar-button" type="button">
          Profilis
        </button>
        <button className="sidebar-link sidebar-button" type="button">
          Nustatymai
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;