import { NavLink } from "react-router";
import "./navigation.css";
import dashboardIcon from "../../assets/dashboard.png";
import tasksIcon from "../../assets/tasks.png";
import projectsIcon from "../../assets/projects.png";

const Navigation = () => {
  return (
    <div>
      <nav className="navigation">
        <h1 className="navigation-logo">Tasky</h1>
        <NavLink className="nav-link" to="/dashboard" end>
          <img src={dashboardIcon} alt="" className="nav-link__icon"/>
          <p>Dashboard</p>
        </NavLink>
        <NavLink className="nav-link" to="/tasks">
          <img src={tasksIcon} alt="" className="nav-link__icon"/>
          <p>All tasks</p>
        </NavLink>
        <NavLink className="nav-link" to="/categories">
          <img src={projectsIcon} alt="" className="nav-link__icon" />
          <p>Categories</p>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
